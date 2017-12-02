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

module.exports.trip = Object.assign({}, { getTrips, addDummy });