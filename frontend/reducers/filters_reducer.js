
import { UPDATE_FILTERS } from "../actions/nav_actions";

const filtersReducer = (state = [], action) => {
    switch(action.type) {
        case UPDATE_FILTERS:
          return action.query.split(" ").map(word => (word.toLowerCase()));
        default:
          return state;
      }
};

export default filtersReducer;
