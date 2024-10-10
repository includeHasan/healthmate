const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

  const sendTokenAsCookie = (res, token) => {
    res.cookie('token', token, {
      httpOnly: false,  
      secure: false,    
      sameSite: 'lax',  // Controls cross-origin cookie sharing
      maxAge: 30 * 24 * 60 * 60 * 1000,  // 30 days
      domain: process.env.NODE_ENV === 'production' ? 'healthhmate.vercel.app' : 'localhost',
      path: '/'
    });
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
