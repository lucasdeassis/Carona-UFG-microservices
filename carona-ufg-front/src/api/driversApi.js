const driversApi = {
  getDrivers: () => {
    return fetch(`http://localhost:8000/driver`)
    .then((response) => {
      console.log('response', response.body);
      return response.body
    }
    );
  },

  addDriver: (driver) => {
    return fetch(`http://localhost:8000/driver`, {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify(driver)
    }).then((res) => {
      console.log('res', res);
      return res.status;
    })
  },
}

export default driversApi;

