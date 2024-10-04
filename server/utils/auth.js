const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Decode JWT token (verify signature)
const decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

// Send token as a cookie instead of header
const sendTokenAsCookie = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true, // More secure; prevents JavaScript access to the token
    // secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    // sameSite: 'Strict', // Helps prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

// Extract token from cookies
const fetchTokenFromCookies = (req, res) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ success: false, error: "No token provided" });
  }
  return token;
};

module.exports = {
  generateToken,
  decodeToken,
  sendTokenAsCookie,
  fetchTokenFromCookies
};
