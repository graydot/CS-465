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


// POST /trips - Add a new trip
// Regardless of the output, response must include HTML status code
// and JSON message to the requesting client

const tripsAddTrip = async (req, res) => {
    console.log(req.body);
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
    });

    const q = await newTrip.save();
    if (!q) {
        return res.status(400).json(err);
    } else {
        return res.status(200).json(q);
    }
}   

// PUT /trips/:tripCode - Update a trip
// Regardless of the output, response must include HTML status code
// and JSON message to the requesting client

const tripsUpdateTrip = async (req, res) => {
    const q = await Model.findOneAndUpdate({code: req.params.tripCode},{
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
    } ).exec();
    if (!q) {
        return res.status(400).json(err);
    } else {
        return res.status(200).json(q);
    }
}

// DELETE /trips/:tripCode - Delete a trip
// Regardless of the output, response must include HTML status code
// and JSON message to the requesting client

const tripsDeleteTrip = async (req, res) => {
    const q = await Model.findOneAndDelete({code: req.params.tripCode}).exec();

    if (!q) {
        console.error(err.message);
        return res.status(400).json(err);
    } else {
        return res.status(200).json(q);
    }
}
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
}