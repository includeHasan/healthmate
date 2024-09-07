var express = require('express');
const { verifyToken } = require('../utils/auth');
const { allUsers, createUser, loginUser,getUser, forgetPassword, verifyOtp, verifyOtpAndChangePassword } = require('../controllers/user.controller');
var router = express.Router();

router.get('/',allUsers)

router.post('/createUser',createUser)

router.post('/loginUser',loginUser)

router.get('/getUser',verifyToken,getUser)

router.post('/forgetPassword',forgetPassword)

router.post('/verifyOtp',verifyOtp)

router.put('/verifyOtpAndChangePassword',verifyOtpAndChangePassword)





module.exports = router;
