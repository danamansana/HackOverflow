import { RECEIVE_ITEM } from "../actions/item_actions";


const likesReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_ITEM:
      return action.likes;
    default:
      return state;
  }
};

export default likesReducer;
