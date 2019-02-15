import React, { Component } from 'react';
import AdvertList from '../adverts/AdvertList';
import Notifications from './Notifications';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;     // если не получен auth.uid пользователя, то перенаправить

    return (
      <div className="container">
        <div className="row">
          <div className="col list-group">
            <AdvertList projects={projects} />
          </div>
          <div className="col list-group">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}
