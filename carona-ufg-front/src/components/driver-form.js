import React, { Component } from 'react';
import driversApi from '../api/drivers-api'

export default class DriverForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: {
        ufgId: '',
        name: '',
        email: '',
        phone: '',
        car: '',
        rating: 0,
        course: '',
        spots: 0
      }

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const driver = {
      ...this.state.driver,
      [event.target.name]: event.target.value
    }
    this.setState({ driver });
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    driversApi.addDriver(this.state.driver)
  }


  renderInput = (prop, type) => {
    return (
      <div className="driver-input">
        <label>
          {prop}
        </label>
        <input type={type} name={prop} value={this.state[prop]} onChange={this.handleChange} />
      </div>
    );

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        { this.renderInput('ufgId', 'text') }
        { this.renderInput('name', 'text') }
        { this.renderInput('email', 'text') }
        { this.renderInput('phone', 'text') }
        { this.renderInput('car', 'text') }
        { this.renderInput('rating','number') }
        { this.renderInput('course', 'text') }
        { this.renderInput('spots', 'number') }
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
