import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import itemsReducer from './items_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  items: itemsReducer
});
