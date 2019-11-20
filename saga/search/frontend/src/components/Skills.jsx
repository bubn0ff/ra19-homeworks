import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../actions/actionCreators';
import Status from './Status';

export default function Skills() {
  const { items, loading, error, search } = useSelector(state => state.skills);
  const dispatch = useDispatch();

  const handleSearch = event => {
    const { value } = event.target;
    dispatch(changeSearchField(value));
  };

  const hasQuery = search.trim() !== '';

  return (
    <>
      <input type="search" value={search} onChange={handleSearch} />
      {!hasQuery && <Status title='type' />}
      {hasQuery && loading && <Status title='loading' />}
      {error ? <Status title='error' /> : 
        <ul>{items.map(o => <li key={o.id}>{o.name}</li>)}</ul>
      }
    </>
  );
}