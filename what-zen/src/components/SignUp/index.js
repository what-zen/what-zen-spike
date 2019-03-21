import React, { Component } from 'react';
// the link is to be used by the login page if a user has no account yet
// it is not used on this page
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {

  }

  onChange = event => {

  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>

      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
