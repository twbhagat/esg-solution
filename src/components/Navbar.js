import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="./profile" class="nav-link">Investment Portal</a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="./main-form" class="nav-link">ESG Questionaire</a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="./strength" class="nav-link">Strengths</a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="./ex-form" class="nav-link">Exclusions</a>
                        </li>
                    </ul>

                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">

                    {/*user panel*/}
                    
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                        <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div class="info">
                        <a href="#" class="d-block">John Doe</a>
                        </div>
                    </div>
                    
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-bell" />
                        <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-envelope mr-2" /> 4 new messages
                            <span className="float-right text-muted text-sm">3 mins</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-users mr-2" /> 8 friend requests
                            <span className="float-right text-muted text-sm">12 hours</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-file mr-2" /> 3 new reports
                            <span className="float-right text-muted text-sm">2 days</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                        <i className="fas fa-th-large" />
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
