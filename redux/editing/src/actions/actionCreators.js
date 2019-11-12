import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANCEL_SERVICE } from './actionTypes';

export function addService(id, name, price) {
  return {type: ADD_SERVICE, payload: {id, name, price}};
}

export function editService(id, name, price) {
  return {type: EDIT_SERVICE, payload: {id, name, price}};
}

export function cancelService() {
  return {type: CANCEL_SERVICE};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}