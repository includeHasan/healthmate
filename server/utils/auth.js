const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

  const sendTokenAsCookie = (res, token) => {
    return res.cookie('token', token);
  };

const decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

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
