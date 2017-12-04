'use strict'

const { User } = require('./user');

class Driver extends User {
  constructor(ufgId, name, email, phone, car, rating, course, spots) {
    super(ufgId, name, email, phone, rating, course);
    this.car = car;
    this.spots = spots;
  }
}

module.exports.Driver = Driver;