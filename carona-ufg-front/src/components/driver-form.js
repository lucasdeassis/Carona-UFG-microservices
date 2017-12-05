import React, { Component } from 'react';

export default class DriverForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      ufgId: '',
      name: '',
      email: '',
      phone: '',
      car: '',
      rating: '',
      course: '',
      spots: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    console.log(this.state);


    //TODO: FAZER O POST DO DRIVER AQUI
    fetch('localhost:8000/addDriver/', {
      method: 'POST',
      body: JSON.stringify(this.state)
    }).then((response) => {
      response.json()
      console.log('response.json()', response.json());
    });
  }

  renderInput = (prop) => {
    return (
      <div className="driver-input">
        <label>
          {prop}
        </label>
        <input type="text" name={prop} value={this.state[prop]} onChange={this.handleChange} />
      </div>
    );

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        { this.renderInput('ufgId') }
        { this.renderInput('name') }
        { this.renderInput('email') }
        { this.renderInput('phone') }
        { this.renderInput('car') }
        { this.renderInput('rating') }
        { this.renderInput('course') }
        { this.renderInput('spots') }
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
