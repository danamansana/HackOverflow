import { RECEIVE_ITEM_WITH_DESCENDENTS, RECEIVE_LIKE } from "../actions/item_actions";
import merge from 'lodash/merge';


const likesReducer = (state = [], action) => {
  debugger
  switch(action.type){
    case RECEIVE_ITEM_WITH_DESCENDENTS:
      return action.likes;
    case RECEIVE_LIKE:
      return state.concat([action.like]);
    default:
      return state;
  }
};

export default likesReducer;
