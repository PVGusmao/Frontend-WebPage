import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  eventReducer,
  filterReducer
});

export default rootReducer;