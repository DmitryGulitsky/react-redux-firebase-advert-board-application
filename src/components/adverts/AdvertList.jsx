import React from 'react';
import AdvertSummary from './AdvertSummary';
import { Link } from 'react-router-dom';

const AdvertList = ({projects}) => {
  return (  //  выводим на экран каждый элемент с условием, что имеем {projects}. id уникален, присвоен на сервере
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={'/advert/' + project.id} key={project.id}>
            <AdvertSummary project={project} />
          </Link>
        )
      })}  
    </div>
  )
};

export default AdvertList
