import { connect } from 'react-redux';
import Users from '../../components/users/Users';

const mapStateToProps = (state) => {
  return{

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(
    Users);

export default UsersContainer;