import React, { Component } from 'react';
import driversApi from '../api/driversApi'

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
      },
      successSignUp: false

    };
  }

  handleChange = (event) => {
    this.setState({successSignUp: false});
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
      .then(result => {
        console.log('result', result);
        if (result === 200) {
          this.setState({ successSignUp: true });
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { this.renderInput('ufgId', 'text') }
          { this.renderInput('name', 'text') }
          { this.renderInput('email', 'text') }
          { this.renderInput('phone', 'text') }
          { this.renderInput('car', 'text') }
          { this.renderInput('course', 'text') }
          { this.renderInput('rating','number') }
          { this.renderInput('spots', 'number') }
          <div className="sign-up-button">
            <input type="submit" value="CADASTRAR" />
          </div>
        </form>

      {
        this.state.successSignUp && <h4> Usuário Cadastrado com sucesso!</h4>
      }
      </div>


    );
  }
}
