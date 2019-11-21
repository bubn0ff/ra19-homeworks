import { takeLatest, put, spawn, call } from 'redux-saga/effects';
import { fetchServiceSuccess, fetchServiceFailure, fetchServicesSuccess, fetchServicesFailure } from '../actions/actionCreators';
import { FETCH_SERVICE_REQUEST, FETCH_SERVICES_REQUEST } from '../actions/actionTypes';
import { fetchService, fetchServices } from '../api/index';

// WORKERS //

function* handleFetchServiceSaga(action) {
  try {
    const data = yield call(fetchService, action.payload.id);
    yield put(fetchServiceSuccess(data));
  } catch (error) {
    yield put(fetchServiceFailure(error.message));
  }
}

function* handleFetchServicesSaga() {
  try {
    const data = yield call(fetchServices);
    yield put(fetchServicesSuccess(data));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

// WATCHERS //

function* watchFetchServiceSaga() {
  yield takeLatest(FETCH_SERVICE_REQUEST, handleFetchServiceSaga);
}

function* watchFetchServicesSaga() {
  yield takeLatest(FETCH_SERVICES_REQUEST, handleFetchServicesSaga);
}

// ROOT SAGA //

export default function* saga() {
  yield spawn(watchFetchServiceSaga);
  yield spawn(watchFetchServicesSaga);
}