const mongoose = require('mongoose');

const { Trip } = require('../../domain/domain');
const UserSchema = require('./user_schema');

const TripSchema = new Trip(String, String, String, Number, String,
  [UserSchema], Number, [String], UserSchema);

module.exports = Object.assign({}, TripSchema);