import nanoid from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const {id, name} = action.payload;
      const price = Number(action.payload.price);

      if (!id) {
        return [...state, {id: nanoid(), name, price}];
      }

      return state.map(item => item.id === id ? {id, name, price} : item);
    }

    case REMOVE_SERVICE: {
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    }

    default:
      return state;
  }
}