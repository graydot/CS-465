const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET /trips - List all trips
// Regardless of the output, response must include HTML status code
// and JSON message to the requesting client

const tripsList = async (req, res) => {
    const q = await Model
        .find({})
        .exec();

        if (!q) {
            res.status(404).json(err);
        } else {
            res.status(200).json(q);
        }
}

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({"code": req.params.tripCode})
        .exec();

        if (!q) {
            res.status(404).json(err);
        } else {
            res.status(200).json(q);
        }
}

module.exports = {
    tripsList,
    tripsFindByCode
}