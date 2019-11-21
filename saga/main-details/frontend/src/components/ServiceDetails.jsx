import React, { useEffect } from 'react';
import { fetchServiceRequest } from '../actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Status from './Status';

export default function ServiceDetails({ match }) {
  const { item, loading, error } = useSelector(state => state.service);
  const dispatch = useDispatch();
  const id = match.params.id;
  
  useEffect(() => {
    dispatch(fetchServiceRequest(id));
  }, [dispatch, id]);

  return (
    <>
      <button><Link to='/'>Вернуться на главную</Link></button>
      <div>
        {loading && <Status title='loading' />}
        {error && <Status creator={fetchServiceRequest(id)} />}
      </div>
      {item && <ServiceCard item={item} />}
    </>
  );
}