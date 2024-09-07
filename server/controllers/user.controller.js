const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const {generateToken,decodeToken,sendTokenToHeader} = require('../utils/auth');
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
  console.log("yaha error hai" + error)
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
    const token = req.headers.authorization.split(' ')[1];
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
      where: { email: email }
    });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Generate OTP and expiration time
    const otp = generateOtp();
    const otpExpiry = Date.now() + 2 * 60 * 1000; // 2 minutes expiry

    
    await sendOtp(email, otp);

    // Store OTP and expiry in session
    req.session.otp = otp;
    req.session.otpExpiry = otpExpiry;

    res.status(200).json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error("Error in forgetPassword:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

let verifyOtp = async (req, res) => {
  const { otp } = req.body;

  try {
    // Check if OTP matches and hasn't expired
    if (req.session.otp !== otp) {
      return res.status(400).json({ success: false, error: "Invalid OTP" });
    }

    if (Date.now() > req.session.otpExpiry) {
      return res.status(400).json({ success: false, error: "OTP expired" });
    }

    // OTP is valid, proceed with password reset or further steps
    res.status(200).json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error in verifyOtp:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

let verifyOtpAndChangePassword = async (req, res) => {
  const { otp, newPassword } = req.body; // Capture new password in the request body

  try {
    // Check if OTP matches and hasn't expired
    if (req.session.otp !== otp) {
      return res.status(400).json({ success: false, error: "Invalid OTP" });
    }

    if (Date.now() > req.session.otpExpiry) {
      return res.status(400).json({ success: false, error: "OTP expired" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    await prisma.User.update({
      where: { email: req.session.email }, // Assuming email is stored in the session when OTP is generated
      data: { password: hashedPassword }
    });

    // Clear the OTP from the session
    req.session.otp = null;
    req.session.otpExpiry = null;
    req.session.email = null;

    res.status(200).json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    console.error("Error in verifyOtpAndChangePassword:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};


module.exports = {allUsers,createUser,loginUser,getUser,forgetPassword,verifyOtp,verifyOtpAndChangePassword}


