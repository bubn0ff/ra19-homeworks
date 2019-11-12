import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}