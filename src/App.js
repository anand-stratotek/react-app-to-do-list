import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SecondPage from './components/SecondPage';
import NotFound from './components/NotFound';
const App = () => {
  const userName = localStorage.getItem('userName');
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/secondPage' component={SecondPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  ); //JSX- JAVA SCRIPT-HTML
};

export default App;
