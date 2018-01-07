import { RECEIVE_ITEMS, RECEIVE_ITEM_WITH_DESCENDENTS, RECEIVE_ITEM } from "../actions/item_actions";
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM_WITH_DESCENDENTS:
      return action.items;
    case RECEIVE_ITEM:
      return merge({}, state, {[action.item.id]: action.item});
    default:
      return state;
  }
};

export default itemsReducer;
