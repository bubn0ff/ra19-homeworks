import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, retry, debounceTime, catchError, takeUntil } from 'rxjs/operators';
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST, EMPTY_SEARCH_FIELD } from '../actions/actionTypes';
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure, emptySearchField } from '../actions/actionCreators';
import { of } from 'rxjs';

export const changeSearchEpic = action$ => action$.pipe(
  debounceTime(80),
  ofType(CHANGE_SEARCH_FIELD),
  map(o => o.payload.search.trim()),
  map(o => o ? searchSkillsRequest(o) : emptySearchField())
);

export const searchSkillsEpic = action$ => action$.pipe(
  ofType(SEARCH_SKILLS_REQUEST),
  map(o => o.payload.search),
  map(o => new URLSearchParams({ q: o })),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`).pipe(
    takeUntil(action$.pipe(ofType(EMPTY_SEARCH_FIELD))),
    retry(3),
    map(o => searchSkillsSuccess(o)),
    catchError(e => of(searchSkillsFailure(e))),
  )),
);