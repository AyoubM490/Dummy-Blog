import { combineReducers } from 'redux';
import successReducer from './successReducer';

export default combineReducers({
  success: successReducer,
});
