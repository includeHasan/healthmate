const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

const decodeToken = (token) => {
    return jwt.decode(token, process.env.JWT_SECRET);
};

const sendTokenToHeader = (res, token) => {
    res.setHeader('Authorization', `Bearer ${token}`);
};

module.exports = {generateToken,verifyToken,decodeToken,sendTokenToHeader}
