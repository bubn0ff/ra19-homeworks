import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  SERVICE_FORM_INPUT,
  FETCH_SERVICE_FORM_REQUEST,
  FETCH_SERVICE_FORM_FAILURE,
  FETCH_SERVICE_FORM_SUCCESS,
  FETCH_SERVICE_FORM_SAVE_REQUEST,
  FETCH_SERVICE_FORM_SAVE_FAILURE,
  FETCH_SERVICE_FORM_SAVE_SUCCESS,
  FETCH_SERVICES_REMOVE_REQUEST,
  FETCH_SERVICES_REMOVE_FAILURE,
  FETCH_SERVICES_REMOVE_SUCCESS,
} from "./actionTypes"


/* Services creators. */

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE, payload: { error },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS, payload: { items },
});

export const fetchServices = () => async dispatch => {
  dispatch(fetchServicesRequest());

  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    if (!response.ok) throw new Error(response.statusText);
    const items = await response.json();
    dispatch(fetchServicesSuccess(items));
  }
  catch (error) {
    dispatch(fetchServicesFailure(error.message));
  }
};


/* Services Remove creators. */

export const fetchServicesRemoveRequest = id => ({
  type: FETCH_SERVICES_REMOVE_REQUEST, payload: { id },
});

export const fetchServicesRemoveFailure = id => ({
  type: FETCH_SERVICES_REMOVE_FAILURE, payload: { id },
});

export const fetchServicesRemoveSuccess = id => ({
  type: FETCH_SERVICES_REMOVE_SUCCESS, payload: { id },
});

export const fetchServicesRemove = id => async dispatch => {
  dispatch(fetchServicesRemoveRequest(id));

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error(response.statusText);

    dispatch(fetchServicesRemoveSuccess(id));
  }
  catch (error) {
    dispatch(fetchServicesRemoveFailure(id));
  }
  finally {
    dispatch(fetchServices());
  }
};


/* Service Form creators */

export const serviceFormInput = (name, value) => ({
  type: SERVICE_FORM_INPUT, payload: { name, value },
});

export const fetchServiceFormRequest = () => ({
  type: FETCH_SERVICE_FORM_REQUEST,
});

export const fetchServiceFormFailure = error => ({
  type: FETCH_SERVICE_FORM_FAILURE, payload: { error },
});

export const fetchServiceFormSuccess = item => ({
  type: FETCH_SERVICE_FORM_SUCCESS, payload: { item },
});

export const fetchServiceForm = id => async dispatch => {
  dispatch(fetchServiceFormRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
    if (!response.ok) throw new Error(response.statusText);
    const item = await response.json();
    dispatch(fetchServiceFormSuccess(item));
  }
  catch (error) {
    dispatch(fetchServiceFormFailure(error.message));
  }
};


/* Service Form Save creators */

export const fetchServiceFormSaveRequest = () => ({
  type: FETCH_SERVICE_FORM_SAVE_REQUEST,
});

export const fetchServiceFormSaveFailure = error => ({
  type: FETCH_SERVICE_FORM_SAVE_FAILURE, payload: { error },
});

export const fetchServiceFormSaveSuccess = () => ({
  type: FETCH_SERVICE_FORM_SAVE_SUCCESS,
});

export const fetchServiceFormSave = (id, name, price, content) => async dispatch => {
  dispatch(fetchServiceFormSaveRequest());

  try {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id, name, price, content}),
    });

    if (!response.ok) throw new Error(response.statusText);

    dispatch(fetchServiceFormSaveSuccess());
  }
  catch (error) {
    dispatch(fetchServiceFormSaveFailure(error.message));
  }
};