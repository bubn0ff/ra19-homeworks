import { FETCH_SERVICE_REQUEST, FETCH_SERVICE_FAILURE, FETCH_SERVICE_SUCCESS } from '../actions/actionTypes';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICE_REQUEST:
      return { ...initialState, loading: true };

    case FETCH_SERVICE_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case FETCH_SERVICE_SUCCESS:
      return { ...state, loading: false, item: action.payload.item };

    default:
      return state;
  }
}