const jwt = require('jsonwebtoken');
const { decodeToken } = require('../utils/auth');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const verifyToken = (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: "No token provided" });
      }
  
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ success: false, error: "Invalid token" });
    }
  };

  const isDoctor=async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: "No token provided" });
    }
    const token = authHeader.split(' ')[1];
    const decoded =decodeToken(token)
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id
      }
    });

    if(user.userType  ==='doctor'){
        next()
    }else{
        return res.status(401).json({ success: false, error: "You are not authorized to access this" });
    }
  }

  const isPatient=async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: "No token provided" });
    }
    const token = authHeader.split(' ')[1];
    const decoded =decodeToken(token)
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id
      }
    });
    if(user.userType  ==='patient'){
        next()
    }else{
      return res.status(401).json({ success: false, error: "You are not authorized to access this" });
    }
  }

  const isAdmin=async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: "No token provided" });
    }
    const token = authHeader.split(' ')[1];
    const decoded =decodeToken(token)
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id
      }
    });
    if(user.userType  ==='admin'){
        next()
    }else{
      return res.status(401).json({ success: false, error: "You are not authorized to access this" });
    }
  }

  module.exports={verifyToken,isDoctor,isPatient,isAdmin}