import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import M from 'minimatch';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import MainForm from './MainForm';
import ExclusionsForm from './ExclusionsForm'
import QuestionaireStart from './QuestionaireStart';
import InvestmentProfile from './InvestmentProfile';
import StrengthsForm from './StrengthsForm';

export default class InvestmentPortal extends Component {

    render() {
        
        return (
            <Router>
                <div class="wrapper">
                    <Navbar/>
                    <Sidebar/>
                    <div class="content-wrapper">
                        <Route exact path="/" component={QuestionaireStart}/>
                        <Route exact path="/main-form" component={MainForm}/>
                        <Route exact path="/ex-form" component={ExclusionsForm}/>
                        <Route exact path="/profile" component={InvestmentProfile}/>
                        <Route exact path="/strength" component={StrengthsForm}/>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
