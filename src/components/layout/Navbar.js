import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks' // кнопки панели навигации при успешной авторизации
import SignedOutLinks from './SignedOutLinks'   // кнопки панели навигации без авторизации
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
  console.log('Navbar auth - ',auth);
  console.log('Navbar profile - ',profile);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;  // если получен auth.uid пользователя, то отображать соотв.компонент

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Advert Board</Link>
        {links}
      </div>
    </nav>
  )
};

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
};

export default connect(mapStateToProps)(Navbar)
