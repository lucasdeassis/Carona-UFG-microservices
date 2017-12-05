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
          <td>{trip.ufgId}</td>
          <td>{trip.name}</td>
          <td>{trip.email}</td>
          <td>{trip.phone}</td>
          <td>{trip.car}</td>
          <td>{trip.course}</td>
          <td>{trip.rating}</td>
          <td>{trip.spots}</td>
        </tr>
      )
    })
  }

  render() {
    return (
        <div>
          <h3>LISTA DE MOTORISTAS</h3>
          <table>
            <thead>
              <tr>
                <th>UFG ID</th>
                <th>Name</th>
                <th>email</th>
                <th>phone</th>
                <th>car</th>
                <th>course</th>
                <th>rating</th>
                <th>spots</th>
              </tr>

            </thead>
            <tbody>
              { this.state.successtripList ? this.populateList(this.state.trips):
                <tr>
                  <td colspan="8">Nenhum motorista foi cadastrado ou não foi possível obter as informações!</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

    )
  }





}

