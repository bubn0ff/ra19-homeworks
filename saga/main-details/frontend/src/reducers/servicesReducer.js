import { FETCH_SERVICES_REQUEST, FETCH_SERVICES_FAILURE, FETCH_SERVICES_SUCCESS } from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...initialState, loading: true };

    case FETCH_SERVICES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case FETCH_SERVICES_SUCCESS:
      return { ...state, loading: false, items: action.payload.items };

    default:
      return state;
  }
}