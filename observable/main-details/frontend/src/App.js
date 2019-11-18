import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import './App.css';

export default function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/:id/details' component={ServiceDetails} />
          <Route path='/' exact component={MainPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}