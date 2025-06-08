var express = require('express');
var router = express.Router();
const ctrlContact = require('../controllers/contact');

router.get('/', ctrlContact.contact);

module.exports = router; 