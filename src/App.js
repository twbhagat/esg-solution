import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import MainForm from './components/MainForm';
import ExclusionsForm from './components/ExclusionsForm'
import QuestionaireStart from './components/QuestionaireStart';

function App() {
  return (
    <Router>
    <div class="wrapper">
      <Header/>
      <Route exact path="/start" component={QuestionaireStart}/>
      <Route exact path="/form" component={MainForm}/>
      <Route exact path="exclusions" component={ExclusionsForm}/>
    </div>
    </Router>
  );
}

export default App;
