import React, {Component, Fragment} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
// import AddUpdateItemFormContainer
//   from '../../containers/AddUpdateItemFormContainer';
// import UploadPopupContainer
//   from '../../containers/UploadPopupContainer';
// import store from '../../store';
// import {
//   getGroups,
//   getStudents,
//   getStudentsById,
//   getTeachers,
//   getTeachersById,
//   getGroupsById,
//   addStudentFormType,
//   addTeacherFormType,
//   addGroupFormType,
//   updateStudentFormType,
//   updateTeacherFormType,
//   updateGroupFormType
// } from '../../actions';

export default class ItemsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idGroup: '1',
      idTeacher: '1',
      displayAllItems: false,
      displayByItemsId: false,
      displayForm: false,
      tableData: {}
    };
    //this.handleGetStudentsById = this.handleGetStudentsById.bind(this);
    //this.handleGetTeachersById = this.handleGetTeachersById.bind(this);
    //this.handleGetGroupsById = this.handleGetGroupsById.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.handleDelete = this.handleDelete.bind(this);
    //this.handleAddItemForm = this.handleAddItemForm.bind(this);
    //this.handleUpdateItemForm = this.handleUpdateItemForm.bind(this);
    //this.handleShowAllItems = this.handleShowAllItems.bind(this);
    //this.handleShowItemsById = this.handleShowItemsById.bind(this);
    //this.handleHideForm = this.handleHideForm.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //handleDelete(id) {
  //  const currentPage = this.props.page;
  //  switch (currentPage) {
  //    case 'studentsPage':
  //      this.props.onDeleteStudent(id);
  //      break;
  //    case 'teachersPage':
  //      this.props.onDeleteTeacher(id);
  //      break;
  //    case 'groupsPage':
  //      this.props.onDeleteGroup(id);
  //      break;
  //    default:
  //      break;
  //  }
  //}
  //handleUpdateItemForm(itemOriginal) {
  //  this.setState({
  //    ...this.state,
  //    displayForm: true
  //  });
//
  //  const exitButton = document.getElementById("exitButton");
  //  exitButton.style.display = "block";
//
  //  const currentPage = this.props.page;
  //  switch(currentPage) {
  //    case 'studentsPage':
  //      const student = {
  //        id: itemOriginal.id,
  //        firstName: itemOriginal.firstName,
  //        lastName: itemOriginal.lastName,
  //      };
  //      this.props.dataToUpdate(student);
  //      store.dispatch(updateStudentFormType());
  //      break;
  //    case 'teachersPage':
  //      const teacher = {
  //        id: itemOriginal.id,
  //        firstName: itemOriginal.firstName,
  //        lastName: itemOriginal.lastName
  //      };
  //      this.props.dataToUpdate(teacher);
  //      store.dispatch(updateTeacherFormType());
  //      break;
  //    case 'groupsPage':
  //      const group = {
  //        id: itemOriginal.id,
  //        number: itemOriginal.number,
  //        idTeacher: itemOriginal.teacher.id,
  //      };
  //      this.props.dataToUpdate(group);
  //      store.dispatch(updateGroupFormType());
  //      break;
  //    default:
  //      break;
  //  }
  //}


  render() {

    console.log('this.props items table - ', this.props);

    const columns = [
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Phone',
        accessor: 'phone'
      },
      {
        Header: 'Delete/Update',
        Cell: props => {
          return (
              <div>
                <button className="btn btn-danger"
                        onClick={() => this.handleDelete(
                            props.original.id)}>
                  <span className="fa fa-trash"/>
                </button>
                <button className="btn btn-warning"
                        onClick={() => this.handleUpdateItemForm(
                            props.original)}>
                  <span className="fa fa-pencil"/>
                </button>
              </div>
          );
        },
        filterable: false,
        sortable: false,
        width: 120,
        maxWidth: 200,
        minWidth: 120
      }
    ];

    return (
        <Fragment>
            <ReactTable
                id="react-table"
                columns={columns}
                data={this.props.users}
                filterable
                sortable
                defaultPageSize={5}
                noDataText={'Please wait...'}
            >
              {(state, makeTable) => {
                return (
                    <div
                        style={{
                          background: '#7b7b7b',
                          borderRadius: '5px',
                          overflow: 'hidden'
                        }}
                    >
                      {makeTable()}
                    </div>
                );
              }}
            </ReactTable>
        </Fragment>
    );
  }
}