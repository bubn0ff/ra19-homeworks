import React, { useCallback, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { serviceFormInput, fetchServiceForm, fetchServiceFormSave } from '../actions/actionCreators';
import Error from './Error';

export default function ServiceForm({ id }) {
  const {item, loading, error} = useSelector(state => state.serviceForm);
  const {loading: saveLoading, error: saveError, success: saveSuccess} = useSelector(state => state.serviceFormSave);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    const {id, name, price, content} = item;
    dispatch(fetchServiceFormSave(id, name, price, content));
  }, [dispatch, item]);

  const handleInput = useCallback(event => {
    let {name, value} = event.target;

    if (name === 'price') {
      value = Number(value);
    }

    dispatch(serviceFormInput(name, value));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchServiceForm(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <Error error={error} creator={fetchServiceForm(id)} />;
  }

  return (
    <>
      {saveSuccess && <Redirect to="/services" />}
      {saveError && <Error message={saveError} />}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Название</label>
          <input type="text" name="name" value={item.name} disabled={saveLoading} onChange={handleInput} />
        </div>
        <div>
          <label>Стоимость</label>
          <input type="text" name="price" value={item.price} disabled={saveLoading} onChange={handleInput} />
        </div>
        <div>
          <label>Описание</label>
          <input type="text" name="content" value={item.content} disabled={saveLoading} onChange={handleInput} />
        </div>
        <button><Link to="/services" disabled={saveLoading}>Отмена</Link></button>
        <button type="submit" disabled={saveLoading} >{saveLoading ? <p>*</p> : 'Сохранить'}</button>
      </form>
    </>
  );
}