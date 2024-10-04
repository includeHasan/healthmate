const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const { generateToken, decodeToken, sendTokenAsCookie, fetchTokenFromCookies } = require('../utils/auth');
const { validateUser } = require('../utils/inputValidator');
const { generateOtp, sendOtp } = require('../utils/otp');

var prisma = new PrismaClient();


let loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await prisma.user.findFirst({
      where: { email }
    });

    if (!user) {
      return res.status(400).json({ success: false, error: "User not found" });
    }

    // Check if password matches
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ success: false, error: "Invalid password" });
    }

    // Generate token and send it as a cookie
    const token = generateToken(user.id);
    sendTokenAsCookie(res, token);

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

let createUser = async (req, res) => {
  const { email, password, phoneNo } = req.body;
  try {
    // Check if the user already exists by email or phoneNo
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { phoneNo }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await prisma.user.create({
      data: { email, phoneNo, password: hashedPassword }
    });

    res.status(200).json({ success: true, user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error"+error });
  }
};

// Get user info using the user attached to req by the middleware
let getUser = async (req, res) => {
  try {
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.error("Error in getUser function:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

// Log the user out by clearing the cookie
let logout = async (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout function:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = { loginUser, createUser, getUser, logout };

// Verify OTP and change password
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

    // Clear session after password change
    req.session.otp = null;
    req.session.otpExpiry = null;
    req.session.email = null;

    res.status(200).json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    console.error("Error in verifyOtpAndChangePassword:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const allUsers=(req,res)=>{
  try {
    const data=prisma.User.findAll();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({success:false,error})
  }
}


module.exports = { allUsers, createUser, loginUser, getUser, verifyOtpAndChangePassword, logout };
