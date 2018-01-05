import { RECEIVE_ITEMS, RECEIVE_ITEM } from "../actions/item_actions";
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;
