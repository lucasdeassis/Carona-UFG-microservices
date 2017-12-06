const TripModel = require('./trip_model');

const getTrips = () => {
  return TripModel.collection.find().toArray();
}

const addDummy = () => {
  const TripModel = require('./trip_model');

  return TripModel.collection.save({
    id: '1332145',
    start: 'Senador Canedo',
    destination: 'Chacara Samambaia',
    spots: 3,
    time: '17:00',
    passengers: [],
    price: 10,
    route: '',
    driver: {}
  });
}

const addTrip = (trip) => {
  console.log('trip', trip);
  return TripModel.collection.save({
    id: trip.id,
    start: trip.start,
    destination: trip.destination,
    spots: trip.spots,
    time: trip.time,
    passengers: trip.passengers,
    price: trip.price,
    route: trip.route,
    driver: trip.driver,
  });
}

module.exports = Object.assign({}, { getTrips, addDummy, addTrip });
