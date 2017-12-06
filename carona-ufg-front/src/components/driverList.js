import React, { Component } from 'react';

export class DriverList extends Component {

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
            {this.props.drivers.length > 0? this.populateList(this.props.drivers) :
              <tr>
                <td colSpan="8">Nenhum motorista foi cadastrado ou não foi possível obter as informações!</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

    )
  }





}

