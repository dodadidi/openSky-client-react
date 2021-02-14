import Login from "./Login";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {saveUser} from "../Store/Actions/userAction";
import { connect } from "react-redux";

class _HomePage extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
        saveUser(this.state.user); //send obj user to action
       // console.log(this.state.user);
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Login
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <div>
          {!authenticated ? (
            <h1>Welcome!</h1>
          ) : (
            <div>
              <h1> {this.state.user.username}!</h1>
            </div>
          )}
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}

const mapStateToProps = (state) => { //reduser state change to props
  return {
    loggedInUser: state.userReducer.loggedInUser
  };
};

const mapDispatchToProps = { //func from action change to props
 saveUser
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);