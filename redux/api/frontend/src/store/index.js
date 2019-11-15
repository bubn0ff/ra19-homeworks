import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import servicesReducer from '../reducers/servicesReducer';
import serviceFormReducer from '../reducers/serviceFormReducer';
import serviceFormSaveReducer from '../reducers/serviceFormSaveReducer';
import servicesRemoveReducer from '../reducers/servicesRemoveReducer';

const reducer = combineReducers({
  services: servicesReducer,
  serviceForm: serviceFormReducer,
  servicesRemove: servicesRemoveReducer,
  serviceFormSave: serviceFormSaveReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;