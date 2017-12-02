const mongoose = require('mongoose');

const { User } = require('../../domain/domain');

const UserSchema = new User(String, String, String, String, Number, String);

module.exports = Object.assign({}, UserSchema);