var express = require('express');
var router = express.Router();
const ctrlRooms = require('../controllers/rooms');

router.get('/', ctrlRooms.rooms);

module.exports = router; 