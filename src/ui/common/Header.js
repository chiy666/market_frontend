//import React, {useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {Context} from "../../store";

import React,{useContext, useState} from "react";
import {LOGOUT} from "../../constants/reducerConstants";
import logo from "../../public/image/logo.png"


const LoggedOutView = (props) => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = (props) => {
  if (props.currentUser) {
    function logOut(){
      localStorage.clear();
      window.location.href = "/";
    }
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/newproduct" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/myproduct" className="nav-link">
              <i className="ion-clipboard"></i>&nbsp;My Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/favorite" className="nav-link">
            <i className="ion-heart"></i>&nbsp;Favorite
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            {/* <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} /> */}
            {props.currentUser.username}
          </Link>
        </li>
        <li className="nav-item">
        <button
                className="btn btn-outline-danger"
                onClick={logOut}>
                logout
              </button>
              </li>

      </ul>
    );
  }

  return null;
};
const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),

});
const Header = () => {
    const [state, dispatch] = useContext(Context)
    const {auth, setting} = state
    

    const history = useHistory();
    function logOut(){
      localStorage.clear();
      history.push('/')
    }
    return (
        <nav className="navbar navbar-light" >
            
            <div className="container">
              <Link to="/">
                {<img className = "logo"src={logo} alt=""/>}
              </Link>
              <Link to="/" className="navbar-brand">
                second hand market
                   
              </Link>

                <LoggedOutView currentUser={auth.currentUser} />

                <LoggedInView currentUser={auth.currentUser} />
            </div>
        </nav>
    );
}

export default Header;
