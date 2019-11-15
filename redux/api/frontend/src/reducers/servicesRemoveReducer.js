import {
  FETCH_SERVICES_REMOVE_REQUEST,
  FETCH_SERVICES_REMOVE_FAILURE,
  FETCH_SERVICES_REMOVE_SUCCESS
} from "../actions/actionTypes";

const initialState = [];

export default function servicesRemoveReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REMOVE_REQUEST:
      return [...state, action.payload.id];

    case FETCH_SERVICES_REMOVE_FAILURE:
    case FETCH_SERVICES_REMOVE_SUCCESS:
      return state.filter(value => value !== action.payload.id);

    default:
      return state;
  }
}