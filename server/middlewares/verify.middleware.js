const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { decodeToken, fetchTokenFromCookies } = require('../utils/auth');

// Verifies the token from cookies and attaches the user details to req.user
const verifyToken = async (req, res, next) => {
  try {
    // Fetch token from cookies
    const token = fetchTokenFromCookies(req, res);
    const decoded = decodeToken(token);

    // Fetch user details based on the decoded ID
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });

    if (!user) {
      return res.status(401).json({ success: false, error: "Invalid token, user not found" });
    }

    req.user = user; // Attach user to request
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: "Invalid token" });
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
