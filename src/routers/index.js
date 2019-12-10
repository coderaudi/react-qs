/**
 * App Routes
 */
import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";


import {
    //   getAppConfig,
    //   collapsedSidebarAction,
    //   signoutUser,
    //   getLoginUserDetails
} from "../actions/index";


import {
    AsyncHomeComponent,
    AsyncDashboardComponent
} from "../components/AsyncComponent/AsyncComponent";

// import $ from "jquery";
// import { isMobileDevice, getLabName } from "../helpers/helpers";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

class MainApp extends Component {
    state = {
        logoutURL: "/"
    };

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
    componentDidMount() {

    }


    render() {

        return (
            <div >
                <Header />
                <Switch>

                    <Route
                        
                        path="/app/home"
                        component={AsyncHomeComponent}
                    />
                     <Route
                        
                        path="/app/dashboard"
                        component={AsyncDashboardComponent}
                    />


                </Switch>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ appsetting }) => {
    return {
        // collapsedSidebar: settings.navCollapsed,
        // settings,
        // userSetting,
        // account,
        // copyRightText: settings.copyRightText
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        {
            // collapsedSidebarAction,
            // signoutUser,
            // getAppConfig,
            // getLoginUserDetails
        }
    )(MainApp)
);
