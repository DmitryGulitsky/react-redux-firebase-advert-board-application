import React from 'react';
import moment from 'moment';    //  функция для отображения даты

const AdvertSummary = ({project}) => {
  return (
    <div className="list-group-item list-group-item-action summary">
      <h4 className="text-info">{project.title}</h4>
      <p>
        <span className="text-info">Description</span> - {project.description}
      </p>
      <p><span className="text-info">Category</span> - {project.category}</p>
      <p><span className="text-info">Price</span> - {project.price}</p>
      <p>Created by {project.authorFirstName} {project.authorLastName}</p>
      <p>{moment(project.createdAt.toDate()).calendar()}</p>
    </div>
  );
};

export default AdvertSummary;
