import { connect } from 'react-redux';  // подключаем компонент к redux srore
import { createProject } from '../../store/actions/projectActions';
import CreateProject from '../../components/projects/CreateProject';

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

const CreateProjectContainer = connect(mapStateToProps, mapDispatchToProps)(
    CreateProject);

export default CreateProjectContainer;