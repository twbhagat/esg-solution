import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SelectionsForm extends Component {
    constructor(){
        super()
        // this.state = {
        //     selections: []
        // }
    }


    render() {
        const selectionPrompt = "Select up to five causes that you are passionate about and would like to invest in"
        let selectionCounter = `${this.props.currentSelections.length} selected out of 5`

        let currentSelectionsList = this.props.currentSelections.join(", ")

        return (
            <div>
            <section class="content">
            <div class="container-fluid">
                {/* iCheck */}
            <div className="card card-success">
                <div className="card-header">
                    <h1 className="card-title">
                        {this.props.currentSelections.length > 0 ? selectionCounter : selectionPrompt}
                    </h1>                
                </div>
                <div className="card-body"></div>

                <div className="row">

                    <div className="col-sm-8">
                        <div class="card-subheader">
                            <h5>Your current selections:</h5>
                            <p>{currentSelectionsList}</p>
                        </div><br/>
                    </div>

                    <div className="col-sm-3">
                        <button type="button" class="btn btn-block btn-primary" onClick={this.props.submit}>Apply my Passions</button>
                        <NavLink to="/exclusions">
                            <button type="button" class="btn btn-block btn-default">Skip</button>
                        </NavLink>
                    </div>

                </div><br/>

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
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Emissions" onChange={this.props.handleChange}/>
                                <label htmlFor="Emissions">
                                    Emissions
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Compensation" onChange={this.props.handleChange}/>
                                <label htmlFor="Compensation">
                                    Compensation
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Business Ethics" onChange={this.props.handleChange}/>
                                <label htmlFor="Business Ethics">
                                    Business Ethics
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Environmental Management" onChange={this.props.handleChange} />
                                <label htmlFor="Environmental Management">
                                    Environmental Management
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Diversity" onChange={this.props.handleChange}/>
                                <label htmlFor="Diversity">
                                    Diversity
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Capital Structure" onChange={this.props.handleChange}/>
                                <label htmlFor="Capital Structure">
                                    Capital Structure
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Waste" onChange={this.props.handleChange} />
                                <label htmlFor="Waste">
                                    Waste
                                </label>
                            </div>
                            
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Employment Quality" onChange={this.props.handleChange}/>
                                <label htmlFor="Employment Quality">
                                    Employment Quality
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Corporate Governance" onChange={this.props.handleChange}/>
                                <label htmlFor="Corporate Governance">
                                    Corporate Governance
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Resource Use" onChange={this.props.handleChange} />
                                <label htmlFor="Resource Use">
                                    Resource Use
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Human Rights" onChange={this.props.handleChange} />
                                <label htmlFor="Human Rights">
                                    Human Rights
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Transparency" onChange={this.props.handleChange}/>
                                <label htmlFor="Transparency">
                                    Transparency
                                </label>
                            </div>
                        </div>
                        </div>

                    </div>
                    

                    <div className="row">
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Environmental Stewardship" onChange={this.props.handleChange}/>
                                <label htmlFor="Environmental Stewardship">
                                    Environmental Stewardship
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Labor Rights" onChange={this.props.handleChange}/>
                                <label htmlFor="Labor Rights">
                                    Labor Rights
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Forensic Accounting" onChange={this.props.handleChange}/>
                                <label htmlFor="Forensic Accounting">
                                    Forensic Accounting
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Water" onChange={this.props.handleChange}/>
                                <label htmlFor="Water">
                                    Water
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Occupational Health and Safety" onChange={this.props.handleChange}/>
                                <label htmlFor="Occupational Health and Safety">
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
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Environmental Solutions" onChange={this.props.handleChange}/>
                                <label htmlFor="Environmental Solutions">
                                    Environmental Solutions
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Training and Development" onChange={this.props.handleChange}/>
                                <label htmlFor="Training and Development">
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
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Product Quality and Safety" onChange={this.props.handleChange}/>
                                <label htmlFor="Product Quality and Safety">
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
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Community Relations" onChange={this.props.handleChange}/>
                                <label htmlFor="Community Relations">
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
                        {/* checkbox */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="checkbox" id="Product Access" onChange={this.props.handleChange}/>
                                <label htmlFor="Product Access">
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
            </section>
            </div>
        )
    }
}
