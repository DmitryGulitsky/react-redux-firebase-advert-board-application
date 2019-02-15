import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();   // чтобы не происходило обновления страницы, после нажатия submit у формы
    this.props.signIn(this.state);
  };

  render() {
    const {authError, auth} = this.props;
    if (auth.uid) return <Redirect to="/"/>;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign In</legend>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.handleChange}/>
              <small id="emailHelp" className="form-text text-muted">We'll
                never share your email with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}/>
            </div>

            <div className="input-field">
              <button className="btn btn-success">Login</button>
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
