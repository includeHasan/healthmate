var express = require('express');
const { welcome, createUser } = require('../controllers/user.controller');
var router = express.Router();

router.get('/',welcome)
router.post('/createUser',createUser)
module.exports = router;
