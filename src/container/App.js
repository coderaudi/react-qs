/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { SpringSpinner } from 'react-epic-spinners';
// import { IntlProvider } from 'react-intl';
// import { Redirect, Route } from 'react-router-dom';
// import { NotificationContainer } from 'react-notifications';

// app routes
import MainApp from '../routes';

// App locale
import AppLocale from '../lang';

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    let self = this;
    setTimeout(() => {
      self.setState({ loading: false });
    }, 1000);
  }

  render() {

    return (

     <div>
       <h1>testing</h1>
     </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings }) => {
  // const { user } = authUser;
  // return { settings, user };
};

export default connect(mapStateToProps)(App);
