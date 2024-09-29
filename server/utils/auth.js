const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};


const decodeToken = (token) => {
    return jwt.decode(token, process.env.JWT_SECRET);
};

const sendTokenToHeader = (res, token) => {
    res.setHeader('Authorization', `Bearer ${token}`);
};

const fetchHeader = (req,res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: "No token provided" });
    }
    const token = authHeader.split(' ')[1];
    return token
}

module.exports = {generateToken,decodeToken,sendTokenToHeader,fetchHeader}
