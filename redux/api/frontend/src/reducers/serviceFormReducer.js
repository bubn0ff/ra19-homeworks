import {
  SERVICE_FORM_INPUT,
  FETCH_SERVICE_FORM_REQUEST,
  FETCH_SERVICE_FORM_FAILURE,
  FETCH_SERVICE_FORM_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  item: {
    name: '',
    price: '',
    content: '',
  },
  loading: false,
  error: null,
};

export default function serviceFormReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_FORM_INPUT: {
      const {name, value} = action.payload;
      const {item} = state;
      return {...state, item: {...item, [name]: value}};
    }

    case FETCH_SERVICE_FORM_REQUEST:
      return {...initialState, loading: true};

    case FETCH_SERVICE_FORM_FAILURE:
      return {...state, loading: false, error: action.payload.error};

    case FETCH_SERVICE_FORM_SUCCESS:
      return {...state, loading: false, item: {...action.payload.item}};

    default:
      return state;
  }
}