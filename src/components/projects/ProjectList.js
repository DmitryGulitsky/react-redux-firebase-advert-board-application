import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
  return (  //  выводим на экран каждый элемент с условием, что имеем {projects}. id уникален, присвоен на сервере
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        )
      })}  
    </div>
  )
};

export default ProjectList
