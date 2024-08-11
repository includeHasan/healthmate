var express = require('express');
const { welcome } = require('../controllers/user.controller');
var router = express.Router();

router.get('/',welcome)
module.exports = router;
