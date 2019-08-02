import React from 'react';
import PropTypes from 'prop-types';
import StepsRow from './StepsRow';

// Компонент для общего отображения списка данных
export default function StepsList(props) {
  const handleDelete = id => {
    props.onDelete(id);
  }
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Дата (ДД.ММ.ГГГГ)</th>
            <th>Пройдено, км</th>
            <th>Действия</th>
          </tr>
          {props.walks.map(walk => (
            <StepsRow
              key={walk.id}
              id={walk.id}
              walk={walk}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

StepsList.propTypes = {
  walk: PropTypes.shape({
    id: PropTypes.string,
    km: PropTypes.number,
    date: PropTypes.string
  }),
};