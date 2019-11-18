import { ofType } from 'redux-observable';
import { map, switchMap, catchError, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { FETCH_SERVICES_REQUEST, FETCH_SERVICE_REQUEST } from '../actions/actionTypes';
import { fetchServiceFailure, fetchServiceSuccess, fetchServicesSuccess, fetchServicesFailure } from '../actions/actionCreators';

export const fetchServiceEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICE_REQUEST),
  pluck('payload', 'id'),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}/${o}`).pipe(
    map(o => fetchServiceSuccess(o)),
    catchError(e => of(fetchServiceFailure(e.message))),
  )),
);

export const fetchServicesEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICES_REQUEST),
  switchMap(o => ajax.getJSON(process.env.REACT_APP_API_URL).pipe(
    map(o => fetchServicesSuccess(o)),
    catchError(e => of(fetchServicesFailure(e.message))),
  )),
);