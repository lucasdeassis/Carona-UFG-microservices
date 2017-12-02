'use strict'

class User {
  constructor(ufgId, name, email, phone, rating, course){
    this.ufgId = ufgId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.rating = rating;
  }
}

module.exports.User = User;