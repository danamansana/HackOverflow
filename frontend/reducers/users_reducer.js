import { RECEIVE_ITEM_WITH_DESCENDENTS, RECEIVE_ITEM } from "../actions/item_actions";
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  let m = merge;
  debugger
  let x;
  switch(action.type){
    case RECEIVE_ITEM_WITH_DESCENDENTS:
      return action.users;
    case RECEIVE_ITEM:
       return merge({}, state, action.user);
    default:
      return state;
  }
};

export default usersReducer;
