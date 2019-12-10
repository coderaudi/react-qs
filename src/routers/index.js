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
    AsyncHomeComponent
} from "../components/AsyncComponent/AsyncComponent";

// import $ from "jquery";
// import { isMobileDevice, getLabName } from "../helpers/helpers";

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

                <Switch>
                 
                    <Route
                        exact
                        // path={`${this.props.match.url}/account`}
                        path="/home"
                        component={AsyncHomeComponent}
                    />

                </Switch>

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
