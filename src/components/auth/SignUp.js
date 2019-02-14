import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id='phoneNumber' pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}
