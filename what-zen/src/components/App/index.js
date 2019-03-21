import {
  BrowserRouter as Router,
  Route
  } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Column from '../Column/index'
import Navigation from '../Navigation/index';

import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import * as ROUTES from '../../constants/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </Router>
        <Column/>
      </div>
    );
  }
}

export default App;
