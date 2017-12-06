const tripsApi = {
  getTrips: () => {
    return fetch(`http://localhost:5000/trip`)
    .then((response) => response.json())
  },

  addTrip: (trip) => {
    return fetch(`http://localhost:5000/trip`, {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify(trip)
    }).then((res) => {
      console.log('res', res);
      return res.status;
    })
  },
}

export default tripsApi;

