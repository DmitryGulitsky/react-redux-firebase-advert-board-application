import { connect } from 'react-redux';  // подключаем компонент к redux srore
import { createProject } from '../../store/actions/projectActions';
import CreateAdvert from '../../components/adverts/CreateAdvert';

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
};

const CreateAdvertContainer = connect(mapStateToProps, mapDispatchToProps)(
    CreateAdvert);

export default CreateAdvertContainer;