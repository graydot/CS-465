var express = require('express');
var router = express.Router();
const ctrlAbout = require('../controllers/about');

router.get('/', ctrlAbout.about);

module.exports = router; 