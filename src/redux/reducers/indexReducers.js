import { types } from '../actions/types';
import { contacts } from '../../data';
const initialState = {
	indexArray: contacts.indexArray,
	selectedIndex: '',
};

const indexReducer = function (state = initialState, action) {
	switch (action.type) {
		case types.SELECT_INDEX:
			return {
				...state,
				selectedIndex: action.payload,
			};
		default:
			return state;
	}
};

export default indexReducer;
