//change to sample state: no ui, errors:[]


import { RECEIVE__ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE__ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
