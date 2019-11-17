import {
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_SUCCESS,
  CHANGE_SEARCH_FIELD,
  EMPTY_SEARCH_FIELD,
} from './actionTypes';

export const searchSkillsRequest = search => ({
  type: SEARCH_SKILLS_REQUEST, payload: {search},
});

export const searchSkillsFailure = error => ({
  type: SEARCH_SKILLS_FAILURE, payload: {error},
});

export const searchSkillsSuccess = items => ({
  type: SEARCH_SKILLS_SUCCESS, payload: {items},
});

export const changeSearchField = search => ({
  type: CHANGE_SEARCH_FIELD, payload: {search},
});

export const emptySearchField = () => ({
  type: EMPTY_SEARCH_FIELD,
});