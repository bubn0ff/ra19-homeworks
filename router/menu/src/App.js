import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import TimeAttackPage from './components/TimeAttackPage';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import Menu from './components/Menu';

export default function App() {

  return (
    <Router>
      <>
        <Menu links={links} />
        <div className="page">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

const links = [
  { url: '/', title: 'Главная' },
  { url: '/drift', title: 'Дрифт-такси' },
  { url: '/timeattack', title: 'Time Attack' },
  { url: '/forza', title: 'Forza Karting' }
];