import React from 'react';
import './App.css';
import Data from './components/Data';
import Loading from './components/Loading';
import Error from './components/Error';

export default function App() {
  return (
    <div className="App">
      <h3>Идёт загрузка...</h3>
      <Loading url={process.env.REACT_APP_LOADING_URL} />
      <h3>Получение данных:</h3>
      <Data url={process.env.REACT_APP_DATA_URL} />
      <h3>Получена ошибка:</h3>
      <Error url={process.env.REACT_APP_ERROR_URL} />
    </div>
  );
}