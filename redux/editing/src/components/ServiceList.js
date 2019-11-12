import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../actions/actionCreators';

export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleEdit = useCallback((id, name, price) => {
    dispatch(editService(id, name, price));
  }, [dispatch]);

  const handleRemove = useCallback(id => {
    dispatch(removeService(id));
  }, [dispatch]);

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          <span>{o.name}</span>
          <span>{o.price}</span>
          <span role='img' aria-label='edit' onClick={() => handleEdit(o.id, o.name, o.price)}>✎</span>
          <span role='img' aria-label='delete' onClick={() => handleRemove(o.id)}>❌</span>
        </li>
      ))}
    </ul>
  );
}