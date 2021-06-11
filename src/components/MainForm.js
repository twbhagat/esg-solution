import React, { Component } from 'react'

export default class MainForm extends Component {

    constructor(){
        super()
        this.state = {
            selections: []
        }
    }

    handleChange = (event) => {
        console.log(event)
        const maxSelections = 5
        let currentSelections = this.state.selections
        console.log(currentSelections)

        if(currentSelections.length < maxSelections) {
            currentSelections.push(event.target.value)
        }
        this.setState({
            selections: currentSelections
        });
    }

    render() {
        console.log(this.state.selections)
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
                                <input type="radio" id="Emissions"/>
                                <label htmlFor="Emissions">
                                    Emissions
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Compensation"/>
                                <label htmlFor="Compensation">
                                    Compensation
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Business Ethics"/>
                                <label htmlFor="Business Ethics">
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
                                <input type="radio" id="Environmental Management" />
                                <label htmlFor="Environmental Management">
                                    Environmental Management
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Diversity"/>
                                <label htmlFor="Diversity">
                                    Diversity
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Capital Structure" />
                                <label htmlFor="Capital Structure">
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
                                <input type="radio" id="Waste" />
                                <label htmlFor="Waste">
                                    Waste
                                </label>
                            </div>
                            
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Employment Quality"/>
                                <label htmlFor="Employment Quality">
                                    Employment Quality
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Corporate Governance"/>
                                <label htmlFor="Corporate Governance">
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
                                <input type="radio" id="Resource Use" />
                                <label htmlFor="Resource Use">
                                    Resource Use
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Human Rights" />
                                <label htmlFor="Human Rights">
                                    Human Rights
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Transparency"/>
                                <label htmlFor="Transparency">
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
                                <input type="radio" id="Environmental Stewardship"/>
                                <label htmlFor="Environmental Stewardship">
                                    Environmental Stewardship
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Labor Rights"/>
                                <label htmlFor="Labor Rights">
                                    Labor Rights
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Forensic Accounting"/>
                                <label htmlFor="Forensic Accounting">
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
                                <input type="radio" id="Water"/>
                                <label htmlFor="Water">
                                    Water
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Occupational Health and Safety"/>
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
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Environmental Solutions"/>
                                <label htmlFor="Environmental Solutions">
                                    Environmental Solutions
                                </label>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Training and Development"/>
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
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Product Quality and Safety"/>
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
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Community Relations"/>
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
                        {/* radio */}
                        <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                                <input type="radio" id="Product Access"/>
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
        )
    }
}
