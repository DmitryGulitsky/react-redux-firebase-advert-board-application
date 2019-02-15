import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Users from '../../components/users/Users';

const mapStateToProps = (state) => {
  return{
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(
    Users);

export default UsersContainer;