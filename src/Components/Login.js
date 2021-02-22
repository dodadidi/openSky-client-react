// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import GoogleButton from 'react-google-button'


export default class Login extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <ul className="menu loginOut">
        {authenticated ? (
          <li className="logOut" onClick={this._handleLogoutClick}>Logout</li>
        ) : (
          <li onClick={this._handleSignInClick}><GoogleButton></GoogleButton></li>
        )}
      </ul>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:8080/auth/google", "_self");
  };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open("http://localhost:8080/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };
}


  