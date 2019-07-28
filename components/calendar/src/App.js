import React from 'react';
import './App.css';
import Calendar from './components/Calendar';

export default function App() {
  const now = new Date();

  return (
    <Calendar date={now} />
  );
}