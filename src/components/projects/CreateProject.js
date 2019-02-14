import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class CreateProject extends Component {
  state = {
    title: '',
    description: '',
    category: '',
    price: ''
  };
  handleChange = (e) => {
    this.setState({   //  обновляем значение state соответсвенно значениям value формы
      [e.target.id]: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();   // чтобы не происходило обновления страницы, после нажатия submit у формы
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Advert</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Advert Title</label>
          </div>
          <div className="input-field">
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}>Description</textarea>
            <label htmlFor="content">Advert Description</label>
          </div>
          <div className="input-field">
            <textarea id="category" className="materialize-textarea" onChange={this.handleChange}>Category</textarea>
            <label htmlFor="category">Advert Category</label>
          </div>
          <div className="input-field">
            <textarea id="price" className="materialize-textarea" onChange={this.handleChange}>Price</textarea>
            <label htmlFor="price">Advert Price</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}