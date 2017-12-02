'use strict'

class Trip {
  constructor(id, start, destination, spots, time, passengers, price, route, driver) {
    this.id = id;
    this.start = start;
    this.destination = destination;
    this.spots = spots;
    this.time = time;
    this.passengers = passengers;
    this.price = price;
    this.route = route;
    this.driver = driver;
  }
};

module.exports.Trip = Trip;