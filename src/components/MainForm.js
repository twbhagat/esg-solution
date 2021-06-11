import React, { Component } from 'react'

export default class MainForm extends Component {
    render() {
        return (
            <div>
            
            
            {/* iCheck */}
            <div className="card card-success">
                <div className="card-header">
                <h2 className="card-title">Select up to five causes that you are passionate about and would like to invest in</h2>
                </div>
                <div className="card-body">
                
                    {/* Category Headers */}
                    <div className="row">
                        <div className="col-sm-4">
                            <h5>Environmental Investing</h5>
                            <p>The environmental component emcompasses a company's impact on the planet in both positive and negative ways. A company that's an actively good steward for the environment might be more deserving of your dollars that one that is not.</p>
                        </div>

                        <div className="col-sm-4">
                            <h5>Social</h5>
                            <p>The social component of ESG consists of people releated elements, like company culture and issues that impact employees, customers, consumers, suppliers, the local community, and society at large.</p>
                        </div>

                        <div className="col-sm-4">
                            <h5>Corporate Governance Investing</h5>
                            <p>The environmental component emcompasses a company's impact on the planet in both positive and negative ways. A company that's an actively good steward for the environment might be more deserving of your dollars that one that is not.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Emissions
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Compensation
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Business Ethics
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" />
                                <label htmlFor="radioPrimary1">
                                    Environmental Management
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-danger d-inline">
                                <input type="radio" />
                                <label htmlFor="radioDanger1">
                                    Diversity
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-danger d-inline">
                                <input type="radio" />
                                <label htmlFor="radioDanger1">
                                    Capital Structure
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" />
                                <label htmlFor="radioPrimary1">
                                    Waste
                                </label>
                            </div>
                            
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-success d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioSuccess1">
                                    Employment Quality
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-danger d-inline">
                                <input type="radio" />
                                <label htmlFor="radioDanger1">
                                    Corporate Governance
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" />
                                <label htmlFor="radioPrimary1">
                                    Resource Use
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-danger d-inline">
                                <input type="radio" />
                                <label htmlFor="radioDanger1">
                                    Human Rights
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-danger d-inline">
                                <input type="radio" />
                                <label htmlFor="radioDanger1">
                                    Transparency
                                </label>
                            </div>
                        </div>
                        </div>

                    </div>
                    

                    <div className="row">
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Environmental Stewardship
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Labor Rights
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Forensic Accounting
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Water
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Occupational Health &amp; Safety
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/*Placeholder- no more items for this category*/}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Environmental Solutions
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Training &amp; Development
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/*Placeholder- no more items for this category*/}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                        {/*Placeholder- no more items for this category*/}
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Product Quality &amp; Safety
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/*Placeholder- no more items for this category*/}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                        {/*Placeholder- no more items for this category*/}
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Community Relations
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/*Placeholder- no more items for this category*/}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                        {/*Placeholder- no more items for this category*/}
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio"/>
                                <label htmlFor="radioPrimary1">
                                    Product Access
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/*Placeholder- no more items for this category*/}
                        </div>
                    </div>


                </div>
              
            </div>
            {/* /.card */}
            
            </div>
        )
    }
}
