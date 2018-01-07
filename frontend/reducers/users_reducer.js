import { RECEIVE_ITEM_WITH_DESCENDENTS } from "../actions/item_actions";


const usersReducer = (state = {}, action) => {
  
  switch(action.type){
    case RECEIVE_ITEM_WITH_DESCENDENTS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
