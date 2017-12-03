'use strict'

class Driver {
  constructor(ufgId, name, email, phone, car, spots, rating){
    this.ufgId = ufgId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.car = car;
    this.spots = spots;
    this.rating = rating;
  }
}

module.exports.Driver = Driver;