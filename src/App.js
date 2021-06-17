import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainForm from './components/MainForm';
import StrengthsForm from './components/StrengthsForm';
import ExclusionsForm from './components/ExclusionsForm'
import QuestionaireStart from './components/QuestionaireStart';
import InvestmentProfile from './components/InvestmentProfile';



function App() {
  
  return (
    <Router>
    <div class="wrapper">
      <Navbar/>
      <Sidebar/>
      <div class="content-wrapper">
      {/* <Header/> */}
      <Route exact path="/" component={QuestionaireStart}/>
      <Route exact path="/form" component={MainForm}/>
      <Route exact path="/strengths" component={StrengthsForm}/>
      <Route exact path="/exclusions" component={ExclusionsForm}/>
      <Route exact path="/profile" component={InvestmentProfile}/>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
