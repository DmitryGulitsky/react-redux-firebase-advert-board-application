import React, {Component, Fragment} from 'react';
import ItemsTableContainer from '../../containers/ItemsTableContainer';
import { Redirect } from 'react-router-dom';
//import {
//  getStudents
//} from '../../../actions';
// import store from '../';

export default class StudentsPage extends Component {
  render() {

    const { users, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;     // если не получен auth.uid пользователя, то перенаправить


    return (
        <Fragment>
          <div className="gradient-background">
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