import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainForm from './components/MainForm';
import StrengthsForm from './components/StrengthsForm';
import ExclusionsForm from './components/ExclusionsForm'
import QuestionaireStart from './components/QuestionaireStart';
import InvestmentProfile from './components/InvestmentProfile';
import LoginPage from './components/LoginPage';
import InvestmentPortal from './components/InvestmentPortal';
import { render } from '@testing-library/react';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      authBearer: null,
      authToken: true
    }
  }

  receiveLogin = (bearer, token) => {
    this.setState({
      authBearer: bearer,
      authToken: token
    });
  }

  
  render(){
    return (
      
      <div>
        {this.state.authToken ? <InvestmentPortal user={this.state.authBearer}/> : <LoginPage submit={this.receiveLogin}/>}
      </div>
     
     
    );
  }
    
}

