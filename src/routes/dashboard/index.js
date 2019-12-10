/**
 * Dashboard
 */
import React from 'react';

// page title bar
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../util/IntlMessages';

const Dashboard = ({ match }) => (
	<div className="dashboard-v1">
		<PageTitleBar title={<IntlMessages id="sidebar.dashboard" />} match={match} />
		<h1>Dashboard page</h1>
	</div>
);

export default Dashboard;