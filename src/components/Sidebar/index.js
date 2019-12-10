/**
 *  Sidebar
 */
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from 'jquery';

// redux actions
import { collapsedSidebarAction } from '../../actions';

// // app config
import AppConfig from '../../constants/AppConfig';

// components
import UserBlock from './UserBlock';
import SidebarContent from './SidebarContent';

class Sidebar extends Component {

	componentWillMount() {
		this.updateDimensions();
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	componentWillReceiveProps(nextProps) {
		const { windowWidth } = this.state;
		const { collapsedSidebar } = this.props;
		if (nextProps.location !== this.props.location) {
			if (windowWidth <= 1199) {
				this.props.collapsedSidebarAction(false);
			}
		}
	}

	updateDimensions = () => {
		this.setState({ windowWidth: $(window).width(), windowHeight: $(window).height() });
	}

	render() {
		const { sidebarActiveFilter, enableSidebarBackgroundImage, selectedSidebarImage, rtlLayout } = this.props;
		return (
			<Fragment>
				<div
					className={classNames('rct-sidebar', { 'background-none': !enableSidebarBackgroundImage })}
				
				>
					<div className="site-logo">
				
					</div>
					<div className={`rct-sidebar-wrap sidebar-overlay-${sidebarActiveFilter}`}>
						<Scrollbars
							className="rct-scroll"
							autoHide
							autoHideDuration={100}
							style={{ height: 'calc(100vh - 60px)' }}
						>
							
							<UserBlock />
							<SidebarContent />
						</Scrollbars>
					</div>
				</div>
			</Fragment>
		);
	}
}

// map state to props
const mapStateToProps = ({ settings }) => {
	return settings;
};

export default withRouter(connect(mapStateToProps, {
	collapsedSidebarAction,
})(Sidebar));
