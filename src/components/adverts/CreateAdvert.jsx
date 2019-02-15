import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class CreateAdvert extends Component {
  state = {
    title: '',
    description: '',
    category: '',
    price: ''
  };
  handleChange = (e) => {
    this.setState({   //  обновляем значение state соответсвенно значениям value формы
      [e.target.id]: e.target.value
    });
    console.log(this.state);
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
        <form onSubmit={this.handleSubmit}>
          <h4>Create a New Advert</h4>

          <div className="form-group">
            <label className="col-form-label"
                   htmlFor="title">Advert Title</label>
            <input
              type="text"
              id='title'
              className="form-control"
              placeholder="Enter the title"
              onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="content">Advert Description</label>
            <textarea
              id="description"
              className="form-control"
              rows="3"
              onChange={this.handleChange}>Description</textarea>
          </div>

          <div className="form-group">
            <label htmlFor="category">Select category</label>
            <select
              className="form-control"
              id="category"
              onChange={this.handleChange}>
              <option value="Weapon">Weapon</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>

          <div className="form-group">
            <label
              htmlFor="price"
              className="form-control-label">Advert Price</label>
            <input type="text"
                   id="price"
                   value="Enter price"
                   className="form-control"
                   onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <button className="btn btn-success">Create</button>
          </div>
        </form>
      </div>
    )
  }
}