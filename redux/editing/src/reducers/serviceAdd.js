import { CHANGE_SERVICE_FIELD, ADD_SERVICE, EDIT_SERVICE, CANCEL_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';

const initialState = {
  id: null,
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const {name, value} = action.payload;
      return {...state, [name]: value};
    }

    case ADD_SERVICE:
    case CANCEL_SERVICE: {
      return {...initialState};
    }

    case EDIT_SERVICE: {
      const {id, name, price} = action.payload;
      return {...state, id, name, price};
    }

    case REMOVE_SERVICE: {
      const {id} = action.payload;
      return state.id === id ? {...initialState} : state;
    }

    default:
      return state;
  }
}