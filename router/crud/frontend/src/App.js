import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import NewPost from './components/NewPost';
import ExistPost from './components/ExistPost';
import NotFound from './components/NotFound';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App main-container">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={ExistPost} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}