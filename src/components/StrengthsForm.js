import React, { Component } from 'react'

export default class StrengthsForm extends Component {


    constructor(){
        super()
    }

    buildRange = (sel) => {
        return (
           <div>
                <p>{`${sel}`}</p>
                <div className="slider-yellow" >
                    <div class="slider-track">
                    <input type="text" value="" className="slider form-control" data-slider-min={0} data-slider-max={100} data-slider-step={5} data-slider-value="[0%,100%]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                
                <div className="card card-success">
                    <div className="card-header">
                     <h2 className="card-title">Please indicate the strengths or levels of your interest in your selected enviornmental causes for investing through the sliders below:</h2>
                    </div>
                    <div className="card-body"></div>

                    <div className="row">

                        <div className="col-sm-8">
                            <div class="card-subheader">
                                {this.props.selections.map(sel => {
                                    return this.buildRange(sel);
                                })}
                            </div><br/>
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
        )
    }
}
