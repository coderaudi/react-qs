/**
 * Dashboard
 */


// page title bar
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../util/IntlMessages';



import React, { Component } from 'react';

class Homepage extends Component {

    render() {
        return (
            <div className="dashboard-v1">
		<PageTitleBar title={<IntlMessages id="sidebar.dashboard" />} match={match} />
		<h1>Home page</h1>
	</div>
        );
    }
}

export default Homepage;