/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// app default layout


// async component
import {
  AsyncWelcomePageComponent,

} from '../components/AsyncComponent/AsyncComponent';

class MainApp extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>

        <Route path={`${match.url}/home`} component={AsyncWelcomePageComponent} />

      </div>

    );
  }
}

export default withRouter(connect(null)(MainApp));
