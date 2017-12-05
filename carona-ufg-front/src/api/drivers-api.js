const driversApi = {
  getDriver: () => {
    return fetch(`http://localhost:8000/driver`)
    .then((response) => response.json());
  },

  addDriver: (driver) => {
    console.log('driver', driver);
    return fetch(`http://localhost:8000/driver`, {
      method: 'post',
      body: driver
    }).then((res) => {
      console.log('res', res);
    })
  },
}

export default driversApi;

