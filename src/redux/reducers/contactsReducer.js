import { types } from '../actions/types';
import { contacts } from '../../data';
delete contacts.indexArray;
const initialState = {
	contactList: contacts,
	showForm: false,
	contactToEdit: { name: '', email: '', phone: '' },
};

const contactsReducer = function (state = initialState, action) {
	switch (action.type) {
		case types.GET_CONTACTS:
			return {
				...state,
				contactList: action.payload,
			};
		case types.SHOW_FORM:
			return {
				...state,
				contactToEdit: { name: '', email: '', phone: '' },
				showForm: !state.showForm,
			};
		case types.EDIT_CONTACT:
			return {
				...state,
				showForm: true,
				contactToEdit: action.payload,
			};
		default:
			return state;
	}
};
export default contactsReducer;
