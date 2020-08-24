import HobbyReducer from './hobby';
import { combineReducers } from 'redux';
import UserReducer from './user';
const rootReducer = combineReducers({
  hobby: HobbyReducer,
  user: UserReducer
});
export default rootReducer;
