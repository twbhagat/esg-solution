import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import SelectionsForm from './SelectionsForm';
import StrengthsForm from './StrengthsForm';

export default class MainForm extends Component {

    constructor(){
        super()
        this.state = {
            selections: [],
            selectionsComplete: false,
        }
    }

    selectionSubmission = () => {
        this.setState({
            selectionsComplete: true
        })
        console.log(this.state.selections)
    }


    returnToSelections = () => {
        this.setState({
            selectionsComplete: false
        })
        console.log(this.state)
    }


    handleChange = (event) => {
        const selectionItem = event.target.id
        let currentSelections = this.state.selections
    
        currentSelections.includes(selectionItem) ? this.removeItem(event.target) : this.addItem(event.target);
       
    }
    
    removeItem = (item) => {
        let currentSelections = this.state.selections;
        const index = currentSelections.indexOf(item.id);
        
        if(index > -1){
            currentSelections.splice(index, 1);
        }
    
        this.setState({
            selections: currentSelections
        });
        console.log(this.state.selections)
    }
    
    addItem = (item) => {
        const maxSelections = 5
        let currentSelections = this.state.selections
    
        // if(currentSelections.length < maxSelections) {
        //     currentSelections.push(item.id)
        // } else {
        //     this.handleItemLimit(item)
        // } 
        
        currentSelections.push(item.id)
    
        this.setState({
            selections: currentSelections
        });
        console.log(this.state.selections)
    }
    
    // handleItemLimit = (item) => {
    //     console.log("Item Limit")
    
    // }
    

    render() {

        

        return (
            <div >
                <section class="content-header">
                    <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h4>Fill out a quick and easy application</h4>
                        </div>
                    </div>
                    </div>
                </section>

                {this.state.selectionsComplete ? <StrengthsForm back={this.returnToSelections} selections={this.state.selections}/> : <SelectionsForm currentSelections={this.state.selections} handleChange={this.handleChange} submit={this.selectionSubmission}/>}
            </div>
        )
    }
}
