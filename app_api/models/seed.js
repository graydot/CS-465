// Bring in the DB connection and the Trip Schema
const Mongoose = require('./db');
const Trip = require('./travlr');
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

const seedDB = async() => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
}
seedDB().then(async () => {
    Mongoose.connection.close();
    process.exit(0);
});
module.exports = { Mongoose, Trip, seedDB };