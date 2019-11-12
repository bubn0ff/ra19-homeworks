import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, cancelService } from '../actions/actionCreators';

export default function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = useCallback(event => {
		const {name, value} = event.target;
		dispatch(changeServiceField(name, value));
  }, [dispatch]);

  const handleCancel = useCallback(event => {
    event.preventDefault();
    dispatch(cancelService());
  }, [dispatch]);

	const handleSubmit = useCallback(event => {
    event.preventDefault();
    dispatch(addService(item.id, item.name, item.price));
	}, [item.id, item.name, item.price, dispatch]);

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} placeholder='Название услуги' />
			<input name='price' onChange={handleChange} value={item.price} placeholder='Цена услуги' />
			<button type='submit'>Сохранить</button>
			{item.id && <button onClick={handleCancel}>Отмена</button>}
		</form>
	);
}