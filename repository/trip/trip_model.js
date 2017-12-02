const mongoose = require('mongoose');
const TripSchema = require('./trip_schema');

var TripModel = mongoose.model('Trip', TripSchema);

module.exports = Object.assign({}, TripModel);

