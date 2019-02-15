import React from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

export const AdvertDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;    // если пользователь не авторизован - перенаправить
  //const modifiedAt = (project.modifiedAt !== '') ?
  //  <div>Modified at {moment(project.modifiedAt.toDate()).calendar()}</div>
  //  : null;
  if (project) {
    console.log('project details project - ', project);
    console.log('project details auth - ', auth);
    return (
      <div className="container section project-list">
        <div className="card z-depth-0">
          <div className="card-content">
            <h4 className="text-info">{project.title}</h4>
            <p><span className="text-info">Description:</span> {project.description}</p>
            <p><span className="text-info">Category:</span> {project.category}</p>
            <p><span className="text-info">Price:</span> {project.price}</p>
            <p><span className="text-info">Views:</span> {project.views}</p>
          </div>
          <div>
            <div>Created by {project.authorFirstName} {project.authorLastName}</div>
            <div>User e-mail: {auth.email}</div>
            <div>User phone: {auth.phoneNumber}</div>
            <div>Created at {moment(project.createdAt.toDate()).calendar()}</div>

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
