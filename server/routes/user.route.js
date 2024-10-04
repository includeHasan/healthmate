var express = require('express');
const { verifyToken } = require('../middlewares/verify.middleware');
const { allUsers, createUser, loginUser,getUser,  verifyOtpAndChangePassword,logout } = require('../controllers/user.controller');
var router = express.Router();

router.get('/',allUsers)

router.post('/createUser',createUser)

router.post('/loginUser',loginUser)

router.get('/getUser',verifyToken,getUser)

// router.post('/forgetPassword',forgetPassword)

router.put('/verifyOtpAndChangePassword',verifyOtpAndChangePassword)

router.get('/logout',logout)





module.exports = router;
