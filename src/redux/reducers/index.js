import indexReducer from './indexReducers';
import contactsReducer from './contactsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	indexList: indexReducer,
	contactsList: contactsReducer,
});

export default allReducers;
