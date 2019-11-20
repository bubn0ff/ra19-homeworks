import { put, retry, debounce, takeLatest, spawn } from 'redux-saga/effects';
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure, emptySearchField } from '../actions/actionCreators';
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from '../actions/actionTypes';
import { searchSkills } from '../api/index';

// Workers //

function* handleChangeSearchSaga(action) {
  if (action.payload.search.trim() === '') {
    yield put(emptySearchField());
  } else {
    yield put(searchSkillsRequest(action.payload.search));
  }
}

function* handleSearchSkillsSaga(action) {
  try {
    const retryCount = 3;
    const retryDelay = 1000; // in ms
    const data = yield retry(retryCount, retryDelay, searchSkills, action.payload.search);
    yield put(searchSkillsSuccess(data));
  } catch (error) {
    yield put(searchSkillsFailure(error.message));
  }
}

// Watchers //

function* watchChangeSearchSaga() {
  yield debounce(100, CHANGE_SEARCH_FIELD, handleChangeSearchSaga);
}

function* watchSearchSkillsSaga() {
  yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

// Root saga //

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga)
}