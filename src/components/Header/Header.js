/**
 * App Header
 */
/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconButton } from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from 'react-router-dom';
import screenfull from 'screenfull';
import MenuIcon from "@material-ui/icons/Menu";
import $ from 'jquery';

// actions
import { collapsedSidebarAction } from '../../actions';


// intl messages
import IntlMessages from '../../util/IntlMessages';

class Header extends Component {

  state = {
    customizer: false,
    isMobileSearchFormVisible: false
  }

  // function to change the state of collapsed sidebar
  onToggleNavCollapsed = (event) => {
    const val = !this.props.navCollapsed;
    this.props.collapsedSidebarAction(val);
  }

  // open dashboard overlay
  openDashboardOverlay() {
    $('.dashboard-overlay').toggleClass('d-none');
    $('.dashboard-overlay').toggleClass('show');
    if ($('.dashboard-overlay').hasClass('show')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', '');
    }
  }

  // close dashboard overlay
  closeDashboardOverlay() {
    $('.dashboard-overlay').removeClass('show');
    $('.dashboard-overlay').addClass('d-none');
    $('body').css('overflow', '');
  }

  // toggle screen full
  toggleScreenFull() {
    screenfull.toggle();
  }

  // mobile search form
  openMobileSearchForm() {
    this.setState({ isMobileSearchFormVisible: true });
  }

  render() {
    const { isMobileSearchFormVisible } = this.state;
    $('body').click(function () {
      $('.dashboard-overlay').removeClass('show');
      $('.dashboard-overlay').addClass('d-none');
      $('body').css('overflow', '');
    });

    return (
      <AppBar position="static" className="rct-header">
        <Toolbar className="d-flex justify-content-between w-100">
          <ul className="list-inline mb-0 navbar-left">
            {!this.props.horizontalMenu ?
              <li className="list-inline-item" onClick={(e) => this.onToggleNavCollapsed(e)}>
                <IconButton color="inherit" mini="true" aria-label="Menu" className="humburger">
                  <MenuIcon />
                </IconButton>
              </li> :
              <li className="list-inline-item">
                <IconButton color="inherit" aria-label="Menu" className="humburger" component={Link} to="/">
                  <i className="ti-layout-sidebar-left"></i>
                </IconButton>
              </li>
            }
          
          </ul>
          <ul className="navbar-right list-inline">
           
          </ul>
        </Toolbar>
      </AppBar>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings }) => {
  return settings;
};

export default connect(mapStateToProps, {
  collapsedSidebarAction
})(Header);
