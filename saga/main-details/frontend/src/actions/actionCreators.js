import {
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_FAILURE,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
} from './actionTypes';


// Service creators //

export const fetchServiceRequest = id => ({
  type: FETCH_SERVICE_REQUEST, payload: { id },
});

export const fetchServiceFailure = error => ({
  type: FETCH_SERVICE_FAILURE, payload: { error },
});

export const fetchServiceSuccess = item => ({
  type: FETCH_SERVICE_SUCCESS, payload: { item },
});


// Services creators //

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE, payload: { error },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS, payload: { items },
});