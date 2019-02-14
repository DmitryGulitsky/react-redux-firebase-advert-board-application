import React from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

export const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />;    // если пользователь не авторизован - перенаправить
  if (project) {
    console.log('project details project - ', project);
    console.log('project details auth - ', auth);
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">title - {project.title}</span>
            <p>description - {project.description}</p>
            <p>created - {project.created}</p>
            <p>modified - {project.modified}</p>
            <p>category - {project.category}</p>
            <p>price - {project.price}</p>
            <p>views - {project.views}</p>

          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Created by {project.authorFirstName} {project.authorLastName}</div>
            <div>User e-mail {project.authorEmail}</div>
            <div>User phone {project.authorPhone}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading...</p>
      </div>
    )
  }
};
