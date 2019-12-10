/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { SpringSpinner } from 'react-epic-spinners';
import { IntlProvider } from 'react-intl';
import { Redirect, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

// app routes
import MainApp from '../routes';

// App locale
import AppLocale from '../lang';

// themes
import primaryTheme from './themes/lightTheme';



/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, ...rest, authUser }) =>
  <Route
    {...rest}
    render={props => <Component {...props} />}
  />;

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
    const { locale, darkMode, rtlLayout, activeTheme } = this.props.settings;
    if (this.state.loading) {
      return (
        <div className="rct-loader">
          <SpringSpinner />
        </div>
      );
    }
    if (this.props.location.pathname === '/') {
      return <Redirect to={'/app/dashboard'} />
    }
    const currentAppLocale = AppLocale[locale.locale];

    // theme changes

    let theme = '';
    switch (activeTheme.id) {
      case 1:
        theme = primaryTheme
        break;
      case 2:
        theme = secondaryTheme
        break;
      default:
        break;
    }

    if (darkMode) {
      theme = darkTheme
    }

    if (rtlLayout) {
      theme.direction = 'rtl'
    } else {
      theme.direction = 'ltr'
    }
    return (
      <MuiThemeProvider theme={theme}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <React.Fragment>
            <NotificationContainer />
            <InitialPath path={`${this.props.match.url}app`} authUser={this.props.user} component={MainApp} />
          </React.Fragment>
        </IntlProvider>
      </MuiThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings, authUser }) => {
  const { user } = authUser;
  return { settings, user };
};

export default connect(mapStateToProps)(App);
