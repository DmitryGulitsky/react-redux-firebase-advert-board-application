import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

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
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const {auth, authError} = this.props;
    if (auth.uid) return <Redirect to='/'/>;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign Up</legend>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id='email'
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id='password'
                     onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id='firstName'
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id='lastName'
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id='phoneNumber'
                     pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}"
                     onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <button className="btn btn-success">Sign Up</button>
              <div>
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
