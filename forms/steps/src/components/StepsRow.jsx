import React from 'react';
import PropTypes from 'prop-types';
import deleteIcon from '../img/delete.svg';

// Компонент для построчного отображения введённой информации
export default function StepsRow(props) {
  const {walk, handleDelete} = props;

  const onDelete = () => handleDelete(walk.id);

  return (
    <tr key={walk.id} className="container-row">
      <td className="container-date">{walk.date}</td>
      <td className="container-km">{walk.km}</td>
      <td className="container-delete">
        <span onClick={onDelete}>
          <img className="delete-icon" src={deleteIcon} alt="delete icon" title="Удалить" />
        </span>
      </td>
    </tr>
  );
}

StepsRow.propTypes = {
  walk: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    km: PropTypes.number
  }),
  handleDelete: PropTypes.func
};