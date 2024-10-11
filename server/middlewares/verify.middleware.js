const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { decodeToken } = require('../utils/auth');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false, error: "Token not found" }); // Return to stop execution
    }

    const decoded = decodeToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });

    if (!user) {
      return res.status(401).json({ success: false, error: "Invalid token, user not found" }); // Return to stop execution
    }

    req.user = user; // Attach user to request
    next(); // Call next middleware or route handler
  } catch (error) {
    return res.status(401).json({ success: false, error: "Invalid token" }); // Return to stop execution
  }
};

// Middleware to check if user is a doctor
const isDoctor = (req, res, next) => {
  if (req.user.userType === 'doctor') {
    next();
  } else {
    return res.status(403).json({ success: false, error: "You are not authorized to access doctor" });
  }
};

// Middleware to check if user is a patient
const isPatient = (req, res, next) => {
  if (req.user.userType === 'patient') {
    next();
  } else {
    return res.status(403).json({ success: false, error: "You are not authorized to access patient " });
  }
};

// Middleware to check if user is an admin
const isAdmin = (req, res, next) => {
  if (req.user.userType === 'admin') {
    next();
  } else {
    return res.status(403).json({ success: false, error: "You are not authorized to access  admin" });
  }
};

module.exports = { verifyToken, isDoctor, isPatient, isAdmin };
