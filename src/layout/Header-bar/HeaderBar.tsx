import React from 'react'
// import styled from 'styled-components';
import './Header.css';
interface Props {
    // title: string,
    // bgcolor: string,
    // color: string
}
const HeaderBar : React.FC<Props> = (props) =>(
    
    <header className="main-header">
    <a href="index2.html" className="logo">
        <span className="logo-mini"><b>A</b>LT</span>
        <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <nav className="navbar navbar-static-top" role="navigation">
        {/* Sidebar toggle button*/}
        <a className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                {/* Messages: style can be found in dropdown.less*/}
                {/* <HeaderMessages /> */}
                {/* Notifications: style can be found in dropdown.less */}
                {/* <HeaderNotifications /> */}
                {/* Tasks: style can be found in dropdown.less */}
                {/* <HeaderTasks /> */}
                {/* User Account: style can be found in dropdown.less */}
                <li className="dropdown user user-menu">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                        <span className="hidden-xs">Alexander Pierce</span>
                    </a>
                    <ul className="dropdown-menu">
                        {/* User image */}
                        <li className="user-header">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                            <p>
                                Alexander Pierce - Web Developer
                                <small>Member since Nov. 2012</small>
                            </p>
                        </li>
                        {/* Menu Body */}
                        <li className="user-body">
                            <div className="col-xs-4 text-center">
                                <a href="#">Followers</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="#">Sales</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="#">Friends</a>
                            </div>
                        </li>
                        {/* Menu Footer */}
                        <li className="user-footer">
                            <div className="pull-left">
                                <a href="#" className="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div className="pull-right">
                                <a href="#" className="btn btn-default btn-flat">Sign out</a>
                            </div>
                        </li>
                    </ul>
                </li>
                { /* Control Sidebar Toggle Button */}
                <li>
                    <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                </li>
            </ul>
        </div>
    </nav>
</header>

);
export default HeaderBar;