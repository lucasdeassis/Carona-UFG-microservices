const DriversModel = require('./driver_model');

const getDrivers = () => {
  return DriversModel.collection.find().toArray();
}

const addDummy = () => {
  return DriversModel.collection.save({
    ufgId: '131045',
    name: 'Vinicius Carvalho Machado',
    email: 'viniciuscmac@gmail.com',
    phone: '062999689969',
    car: 'Toyota Etios',
    rating: 4.8,
    course: 'Engenharia de Software',
    spots: 3,
  });
}

module.exports = Object.assign({}, { getDrivers, addDummy });