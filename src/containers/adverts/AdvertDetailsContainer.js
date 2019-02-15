import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {AdvertDetails} from '../../components/adverts/AdvertDetails';

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

const AdvertDetailsContainer = compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'projects'
    }])
)(
    AdvertDetails);

export default AdvertDetailsContainer;
