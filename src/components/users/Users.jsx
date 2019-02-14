import React, {Component, Fragment} from 'react';
import ItemsTableContainer from '../../containers/ItemsTableContainer';
//import {
//  getStudents
//} from '../../../actions';
// import store from '../';

export default class StudentsPage extends Component {
  componentDidMount(){
//    store.dispatch(getUsers());
  }
  render() {
    return (
        <Fragment>
          <div className="dropzone-container gradient-background">
            <h4 className="gradient-background">USERS LIST</h4>
            <p className=" gradient-background">Here you can see users list.
              Push, please, the red button to delete, or orange to update
              user
            </p>
            <ItemsTableContainer/>
          </div>
        </Fragment>
    );
  }
}