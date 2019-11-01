import React from 'react';
import './App.css';
import MyHook from './components/MyHook';

export default function App() {
  return (
    <div className="App">
      <h3>Идёт загрузка...</h3>
      <MyHook url={process.env.REACT_APP_LOADING_URL} />
      <h3>Получение данных:</h3>
      <MyHook url={process.env.REACT_APP_DATA_URL} />
      <h3>Получена ошибка:</h3>
      <MyHook url={process.env.REACT_APP_ERROR_URL} />
    </div>
  );
}