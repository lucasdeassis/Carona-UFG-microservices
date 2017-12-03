const DriversModel = require('./drivers_model');

const getDrivers = () => {
  return DriversModel.collection.find().toArray();
}

const addDummy = () => {
  const DriversModel = require('./drivers_model');
  
  return DriversModel.collection.save({
    id: '11111',
    name: 'Vinicius Carvalho Machado',
    email: 'viniciuscmac@gmail.com',
    phone: '062999689969',
    car: 'Toyota Etios',
    spots: 3,
    rating: 4.8
  });
}

module.exports.drivers = Object.assign({}, { getDrivers, addDummy });