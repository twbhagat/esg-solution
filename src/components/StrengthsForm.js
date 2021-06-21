import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class StrengthsForm extends Component {


    constructor(){
        super()
    }

    buildRange = (sel) => {
        return (
           <div>
               <h6>{sel}</h6>
               <Form.Input type="range" min={0} max={100} step={5} name="strength"></Form.Input>
            </div>
        )
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return (
            <div>
            <section class="content">
            <div class="container-fluid">

                <div className="card card-success">
                    <div className="card-header">
                     <h2 className="card-title">Please indicate the strengths or levels of your interest in your selected enviornmental causes for investing through the sliders below:</h2>
                    </div>
                    <div className="card-body"></div>

                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-6">
                            <Form>
                                <div class="card-subheader">
                                    {this.props.selections.map(sel => {
                                        return this.buildRange(sel);
                                    })}
                                </div><br/>  
                            </Form>              
                        </div>

                    </div>

                    <button onClick={this.props.back}>Back to Cause Selections</button>

                    
                {/* <div class="row">
                    <div class="col-sm-6">

                            
                        <div class="slider-blue">
                        <input type="text" value="" class="slider form-control" data-slider-min="-200" data-slider-max="200"
                            data-slider-step="5" data-slider-value="[-100,100]" data-slider-orientation="horizontal"
                            data-slider-selection="before" data-slider-tooltip="show"></input>
                        </div>
                            
                    </div>
                </div> */}
               
                    
                
                </div>
            </div>
            </section>
            </div>
        )
    }
}
