/**
 * User Block Component
 */
/* eslint-disable */
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import { NotificationManager } from 'react-notifications';

// components


// redux action
import { logoutUserFromFirebase } from '../../actions';

// intl messages
import IntlMessages from '../../util/IntlMessages';

// app config
import AppConfig from '../../constants/AppConfig';

class UserBlock extends Component {

    state = {
        userDropdownMenu: false,
        isSupportModal: false
    }

    /**
     * Logout User
     */
    logoutUser() {
        this.props.logoutUserFromFirebase();
    }

    /**
     * Toggle User Dropdown Menu
     */
    toggleUserDropdownMenu() {
        this.setState({ userDropdownMenu: !this.state.userDropdownMenu });
    }

    /**
     * Open Support Modal
     */
    openSupportModal() {
        this.setState({ isSupportModal: true });
    }

    /**
     * On Close Support Page
     */
    onCloseSupportPage() {
        this.setState({ isSupportModal: false });
    }

    /**
     * On Submit Support Page
     */
    onSubmitSupport() {
        this.setState({ isSupportModal: false });
        NotificationManager.success('Message has been sent successfully!');
    }

    render() {
        return (
            <div className="top-sidebar">
                <div className="sidebar-user-block media">
                    <div className="user-profile">
                        <img src={require('../../assets/img/user-1.jpg')} alt="user profile" className="img-fluid rounded-circle" width="60" height="129" />
                    </div>
                    <Dropdown isOpen={this.state.userDropdownMenu} toggle={() => this.toggleUserDropdownMenu()} className="rct-dropdown media-body pt-10">
                        <DropdownToggle nav>
                            Lucile Beck
                            <i className="ti-angle-down pull-right"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <ul className="list-unstyled mb-0">
                                <li className="media p-15 border-bottom">
                                    <img src={require('../../assets/img/user-1.jpg')} alt="user profile" className="rounded-circle mr-15" width="42" height="42" />
                                    <div className="media-body">
                                        <p className="mb-0 fs-14">Espl User </p>
                                        <span className="text-muted fs-14">info@espl.com</span>
                                    </div>
                                </li>

                                <li className="border-top">
                                    <a href="javascript:void(0)">
                                        <i className="ti ti-power-off"></i>
                                        <IntlMessages id="widgets.logOut" />
                                    </a>
                                </li>
                            </ul>
                        </DropdownMenu>
                    </Dropdown>
                </div>
         
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => {
    return settings;
}

export default connect(mapStateToProps, {
    logoutUserFromFirebase
})(UserBlock);
