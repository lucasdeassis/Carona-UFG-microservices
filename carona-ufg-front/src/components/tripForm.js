import React, { Component } from 'react';
import tripsApi from '../api/tripsApi'

export default class TripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {
        id: '',
        start: '',
        destination: '',
        spots: 0,
        time: '',
        passengers: [],
        price: 0,
        route: '',
        driver: {}
      },
      success: false

    };
  }

  handleChange = (event) => {
    this.setState({ success: false });
    const trip = {
      ...this.state.trip,
      [event.target.name]: event.target.value
    }
    this.setState({ trip });
  }

  handleDriverChange = (event) => {
    const driverObj = this.props.drivers.find( driver => driver.ufgId === event.target.value);

    const trip = {
      ...this.state.trip,
      driver: driverObj
    }

    this.setState({ trip });
    console.log(driverObj);
    console.log(trip);
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    tripsApi.addTrip(this.state.trip)
      .then(result => {
        console.log('result', result);
        if (result === 200) {
          this.setState({ success: true });
        }
      })
  }

  renderInput = (prop, type) => {
    return (
      <div className="form-input">
        <label>
          {prop}
        </label>
        <input type={type} name={prop} value={this.state[prop]} onChange={this.handleChange} />
      </div>
    );
  }

  renderDriverSelectOptions = () => {
    return this.props.drivers.map(driver => {
      return (
        <option value={driver.ufgId} key={driver._id} >{driver.name}</option>
      );
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div className="form-select">
            <label>
              driver
            </label>
            <select onChange={this.handleDriverChange}>
              {this.renderDriverSelectOptions()}
            </select>
          </div>

          {this.renderInput('id', 'text')}
          {this.renderInput('start', 'text')}
          {this.renderInput('destination', 'text')}
          {this.renderInput('time', 'text')}
          {this.renderInput('spots', 'number')}
          {this.renderInput('price', 'number')}

          <div className="sign-up-button">
            <input type="submit" value="Criar carona" />
          </div>
        </form>

        {
          this.state.success && <h4> Carona criada com sucesso!</h4>
        }
      </div>


    );
  }
}
