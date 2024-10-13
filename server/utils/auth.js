const jwt = require('jsonwebtoken');

// Generate JWT token
// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Send token as a secure, HTTP-only cookie
const sendTokenAsCookie = (res, token) => {
  return res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // Must be 'none' to enable cross-site delivery
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    path: '/',
  });
};

// Decode token
const decodeToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};

// Fetch token from cookies
const fetchTokenFromCookies = (req) => {
  return req.cookies.token;
};

const fetchAndDecodeToken = (req) => {
  const token = fetchTokenFromCookies(req);
  return token ? decodeToken(token) : null;
};  


module.exports = {
  generateToken,
  decodeToken,
  sendTokenAsCookie,
  fetchTokenFromCookies,
  fetchAndDecodeToken
};
