import { connect } from 'react-redux'   //  подключаем компонент к redux-store
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Profile from '../../components/profile/Profile';
import {createProject} from '../../store/actions/projectActions';

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
//   updateUser: (user) => dispatch(updateUser(user)),
//   deleteUser: (user) => dispatch(deleteUser(user))
  }
};

const ProfileContainer =
  connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;