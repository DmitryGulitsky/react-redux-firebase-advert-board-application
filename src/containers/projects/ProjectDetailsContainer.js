import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {ProjectDetails} from '../../components/projects/ProjectDetails';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  }
};

const ProjectDetailsContainer = compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'projects'
    }])
)(
    ProjectDetails);

export default ProjectDetailsContainer;
