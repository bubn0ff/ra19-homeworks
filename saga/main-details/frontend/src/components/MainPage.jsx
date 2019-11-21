import React, { useEffect } from 'react';
import { fetchServicesRequest } from '../actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import ServicesList from './ServicesList';
import Status from './Status';

export default function MainPage() {
  const { items, loading, error } = useSelector(state => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  return (
    <>
      <div>
        {loading && <Status title='loading' />}
        {error && <Status creator={fetchServicesRequest()} />}
      </div>
      {items && <ServicesList items={items} />}
    </>
  );
}