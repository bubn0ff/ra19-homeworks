import React, { useState } from 'react';
import WatchItem from './WatchItem';
import WatchInput from './WatchInput';
import nanoid from 'nanoid';

export default function WatchesForm() {
  const [citiesArr, setCities] = useState(cities);

  const handleDelete = id => {
    setCities(citiesArr.filter(city => city.id !== id));
  }

  const handlerAdd = input => {
    input.timezone = +input.timezone;

    if (input.timezone < 0) {
      input.timezone += 24;
    }
    
    setCities([...citiesArr, {...input, id: nanoid()}]);
  }

  const getMoscowTimezone = () => {
    const nowDate = new Date();
    return +nowDate.toString().match(/GMT.../)[0].slice(4);
  }

  return (
    <div className="watch-container">
      <WatchInput handlerAdd={handlerAdd} />
      <div className="watches">
        {citiesArr.map(city => {
          return (
            <WatchItem
              id={city.id}
              city={city.city}
              key={city.id}
              handleDelete={handleDelete}
              timezone={city.timezone}
              moscowTimezone={getMoscowTimezone()}
            />
          );
        })}
      </div>
    </div>
  );
}

const cities = [
  {
    city: 'Moscow',
    id: '09971',
    timezone: 3,
  },
  {
    city: 'Paris',
    id: '09912',
    timezone: 2,
  },
];