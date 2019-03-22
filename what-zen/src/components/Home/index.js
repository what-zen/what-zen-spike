import React, { Component } from 'react';
import Column from '../Column/index';
import { withAuthorization } from '../Session';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Column/>
      </div>
    );
  }
}

const condition = authUser => authUser != null;

export default withAuthorization(condition)(Home);
