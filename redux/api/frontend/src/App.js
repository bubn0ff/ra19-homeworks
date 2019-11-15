import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import ServicesList from './components/ServicesList';
import ServiceCard from './components/ServiceCard';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact><Redirect to="/services" /></Route>
          <Route path='/services/:id' component={ServiceCard} />
          <Route path='/services' exact component={ServicesList} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}