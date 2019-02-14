import React from 'react';
import { connect } from 'react-redux';
import {Navbar} from '../../components/layout/Navbar';

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
};

const NavbarContainer = connect(mapStateToProps, null)(
    Navbar);

export default NavbarContainer;
