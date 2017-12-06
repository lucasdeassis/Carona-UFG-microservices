import React, { Component } from 'react';
import logo from './assets/car.png';
import './App.css';
import DriverForm from './components/driverForm';
import TripForm from './components/tripForm';
import { DriverList } from './components/driverList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Carona UFG</h1>
        </header>
        <div className="forms-container">

          <div className="form">
            <h3 className="section-title">Cadastrar Motorista</h3>
            <DriverForm/>
          </div>

          <div className="form">
            <h3 className="section-title">Criar Carona</h3>
            <TripForm/>
          </div>
        </div>


        <div className="driver-list">
          <DriverList/>
        </div>
      </div>
    );
  }
}

export default App;
