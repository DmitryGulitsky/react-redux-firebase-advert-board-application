import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import SignIn from '../../components/auth/SignIn';

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(
    SignIn);

export default SignInContainer;