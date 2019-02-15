import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="d-flex">
        <li><NavLink to='/users'>Users</NavLink></li>
        <li><NavLink to='/create'>New Advert</NavLink></li>
        <div className="btn-group initials" role="group" aria-label="Basic example">
            <NavLink to='/profile' className="btn btn-info">
              {props.profile.initials}
            </NavLink>
          <button
              type="button"
              className="btn btn-danger"
              onClick={props.signOut}
          >Sign Out</button>
        </div>
      </ul>

    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(SignedInLinks)
