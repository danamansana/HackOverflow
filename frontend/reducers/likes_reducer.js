import { RECEIVE_ITEM_WITH_DESCENDENTS } from "../actions/item_actions";


const likesReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_ITEM_WITH_DESCENDENTS:
      return action.likes;
    default:
      return state;
  }
};

export default likesReducer;
