import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;     // если не получен auth.uid пользователя, то перенаправить

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}
