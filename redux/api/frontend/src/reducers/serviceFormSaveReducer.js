import {
  FETCH_SERVICE_FORM_SAVE_REQUEST,
  FETCH_SERVICE_FORM_SAVE_FAILURE,
  FETCH_SERVICE_FORM_SAVE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

export default function serviceFormSaveReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICE_FORM_SAVE_REQUEST:
      return {...initialState, loading: true};

    case FETCH_SERVICE_FORM_SAVE_FAILURE:
      return {...state, loading: false, error: action.payload.error};

    case FETCH_SERVICE_FORM_SAVE_SUCCESS:
      return {...state, loading: false, success: true};

    default:
      return state;
  }
}