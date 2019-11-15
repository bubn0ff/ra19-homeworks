import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServices } from '../actions/actionCreators';
import ServicesListItem from './ServicesListItem';
import Error from './Error';

export default function ServicesPage(props) {
  const { items, loading, error } = useSelector(state => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <>
      {loading && <p>*</p>}
      {<Error message={error} creator={fetchServices()} />}
      {items && (
        <ul className='list'>
          {items.map(item => <ServicesListItem key={item.id} item={item} />)}
        </ul>
      )}
    </>
  );
}