import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ItemsTable from '../components/ItemsTable';
//import {
//  dataToUpdate,
//  deleteStudent,
//  deleteGroup,
//  deleteTeacher
//} from '../actions/index';

function mapStateToProps(state) {
  return {
    users: state.firestore.ordered.users,
//    page: state.page,
//    students: state.students,
//    groups: state.groups,
//    teachers: state.teachers,
//    dataToUpdate: state.dataToUpdate
  };
}

function mapDispatchToProps(dispatch) {
  return {
//    dataToUpdate: (data) => {
//      dispatch(dataToUpdate(data));
//    },
//    onDeleteStudent: id => {
//      dispatch(deleteStudent(id));
//    },
//    onDeleteGroup: id => {
//      dispatch(deleteGroup(id));
//    },
//    onDeleteTeacher: id => {
//      dispatch(deleteTeacher(id))
//    }
  };
}

const ItemsTableContainer = compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' }
  ])
)(ItemsTable);
export default ItemsTableContainer;