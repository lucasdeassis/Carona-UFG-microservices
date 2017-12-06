import React , { Component } from 'react';
import tripsApi from '../api/tripsApi'

export class TripList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      successtripList: false
    };
  }

  componentWillMount() {
    this.updatetripList();
  }

  updatetripList = () => {
    tripsApi.getTrips()
      .then(trips => {
        this.setState({
          successtripList: true,
          trips
        })
      })
  }

  populateList = (trips) => {
    console.log('trips', trips);
    return trips.map(trip => {
      return (
        <tr key={trip._id}>
          <td>{trip.start}</td>
          <td>{trip.destination}</td>
          <td>{trip.spots}</td>
          <td>{trip.time}</td>
          <td>{trip.price}</td>
          <td>{trip.route}</td>
        </tr>
      )
    })
  }

  render() {
    return (
        <div>
          <h3>CARONAS</h3>
          <table>
            <thead>
              <tr>
                <th>Origem</th>
                <th>Destino</th>
                <th>Vagas</th>
                <th>Partida</th>
                <th>Preço</th>
                <th>Rota</th>
              </tr>

            </thead>
            <tbody>
              { this.state.successtripList ? this.populateList(this.state.trips):
                <tr>
                  <td colSpan="6">Nenhuma carona foi cadastrada ou não foi possível obter as informações!</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

    )
  }





}

