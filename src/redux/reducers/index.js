import indexReducer from './indexReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	indexList: indexReducer,
});

export default allReducers;
