import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchServicesEpic, fetchServiceEpic } from '../epics';
import servicesReducer from '../reducers/servicesReducer';
import serviceReducer from '../reducers/serviceReducer';

const reducer = combineReducers({
  services: servicesReducer,
  service: serviceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  fetchServicesEpic,
  fetchServiceEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;