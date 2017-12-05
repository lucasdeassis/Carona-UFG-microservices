import React , { Component } from 'react';
import driversApi from '../api/driversApi'

export class DriverList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      drivers: [],
      successDriverList: false
    };
  }

  componentWillMount() {
    this.updateDriverList();
  }

  updateDriverList = () => {
    driversApi.getDrivers()
      .then(drivers => {
        this.setState({
          successDriverList: true,
          drivers
        })
      })
  }

  populateList = (drivers) => {
    console.log('drivers', drivers);
    return drivers.map(driver => {
      return (
        <tr key={driver._id}>
          <td>{driver.ufgId}</td>
          <td>{driver.name}</td>
          <td>{driver.email}</td>
          <td>{driver.phone}</td>
          <td>{driver.car}</td>
          <td>{driver.course}</td>
          <td>{driver.rating}</td>
          <td>{driver.spots}</td>
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
              { this.state.successDriverList ? this.populateList(this.state.drivers):
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

