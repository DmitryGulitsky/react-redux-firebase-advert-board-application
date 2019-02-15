import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Profile extends Component {
  state = {
    email: '',
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
    console.log('profile this.props - ', this.props);
    const {auth, authError} = this.props;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Update profile</legend>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id='email'
                aria-describedby="emailHelp"
                defaultValue={auth.email}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                defaultValue={auth.firstName}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                defaultValue={auth.lastName}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}"
                defaultValue={auth.phoneNumber}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <button className="btn btn-success">Update</button>
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
