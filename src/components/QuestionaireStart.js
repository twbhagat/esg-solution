import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class QuestionaireStart extends Component {
    render() {
        return (
            <div>
            <section class="content-header">
                    <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h4>Fill out a quick and easy application</h4>
                        </div>
                    </div>
                    </div>
            </section>

            <section class="content">
            <div class="container-fluid">
                <div className="card card-success">
                    <div className="card-header">
                     <h5 className="card-title">Create your Investment profile</h5>
                    </div>
                    <div className="card-body"></div>

                    <div className="row">
                        <div className="col-sm-6">
                                <h5>Image</h5>
                        </div>

                        <div className="col-sm-6"> 
                            <div>
                                <h5>We do not inherit the Earth from our Ancestors, we borrow it from our Children</h5>
                                <p>Are you interested in applying Socially Responsible Investment (SRI) feature to your profile holdings to align your personal values around enviornmental, social and corporate governance with your investment choices?</p>
                                <u>I want to know more about ESG and its benefits</u>
                                <p>This is the best time to put value in your values</p>

                                <td>
                                    <NavLink to="/form">
                                        <button type="button" class="btn btn-block btn-primary">
                                            I would like to establish my ESG profile
                                        </button>
                                    </NavLink>
                                    
                                </td>

                                <br/>

                                <td>
                                <button type="button" class="btn btn-block btn-default">
                                    I want to continue with conventional profile
                                </button>
                                </td>
                                <br/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </section>
            </div>
        )
    }
}
