const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const {generateToken,decodeToken,sendTokenToHeader} = require('../utils/auth');
 const {validateUser} = require('../utils/inputValidator');
 const {generateOtp,sendOtp} = require('../utils/otp');

var prisma = new PrismaClient();


const allUsers = async (req, res) => {
  try {
    const users = await prisma.User.findMany();
    console.log(users);
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error in welcome function:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};


let loginUser = async (req, res) => {
  let data = req.body
  console.log(data)
  try {
    const user = await prisma.User.findFirst({
      where: {
        email: data.email
      }
    })
    if (!user) {
      return res.status(400).json({success:false, error: "User not found" })
    }
    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({success:false, error: "Invalid password" })
    }
    const token = generateToken(user.id);
    sendTokenToHeader(res,token)
   
    res.status(200).json({success:true,user})
}
catch (error) {
  console.log("error" + error)
  res.status(500).json({success:false,error:error})
}
}



let createUser = async (req, res) => {
  let data = req.body
  console.log(data)
  try {
    // Check if user with same email or phoneNo already exists
    const existingUser = await prisma.User.findFirst({
      where: {
        OR: [
          { email: data.email },
          { phoneNo: data.phoneNo }
        ]
      }
    })

    if (existingUser) {
      return res.status(400).json({success:false, message: "User with this email or phone number already exists" })
    }

   
   
    const hashedPassword = await bcrypt.hash(data.password, 10);

    
    data.password = hashedPassword;

    let response = await prisma.User.create({ data })
    res.status(200).json({success:true,response})
  } catch (error) {
    console.log("yaha error hai" + error)
    res.status(500).json({success:false,error:error})
  }
}

let getUser = async (req, res) => {
  try {
    const parseHeader = String(req.headers.authorization);
    console.log(parseHeader)
    const token = parseHeader.split(' ')[1];

    const decoded = decodeToken(token);
    const userId = decoded.id;

    const user = await prisma.User.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error in getUser function:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
let forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await prisma.User.findFirst({
      where: { email }
    });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const otp = generateOtp();
    const otpExpiry = Date.now() + 2 * 60 * 1000; // 2 minutes expiry

    await sendOtp(email, otp);

    // Ensure session is initialized and store OTP, expiry, and email
    req.session = req.session || {};
    req.session.otp = otp;
    req.session.otpExpiry = otpExpiry;
    req.session.email = email;

    res.status(200).json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error("Error in forgetPassword:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

let verifyOtpAndChangePassword = async (req, res) => {
  const { otp, newPassword } = req.body;

  try {
    if (req.session.otp !== otp) {
      return res.status(400).json({ success: false, error: "Invalid OTP" });
    }

    if (Date.now() > req.session.otpExpiry) {
      return res.status(400).json({ success: false, error: "OTP expired" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.User.update({
      where: { email: req.session.email },
      data: { password: hashedPassword }
    });

    
    req.session.otp = null;
    req.session.otpExpiry = null;
    req.session.email = null;

    res.status(200).json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    console.error("Error in verifyOtpAndChangePassword:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};


const logout = async (_, res) => {
  try {
    
    res.removeHeader('Authorization');
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout function:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}


module.exports = {allUsers,createUser,loginUser,getUser,forgetPassword,verifyOtpAndChangePassword,logout}


