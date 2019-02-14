import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import SignUp from '../../components/auth/SignUp';

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (credentials) => dispatch(signUp(credentials))
  }
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(
    SignUp);

export default SignUpContainer;
