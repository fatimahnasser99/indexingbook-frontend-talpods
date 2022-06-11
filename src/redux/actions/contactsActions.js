import { types } from './types';

export function getContacts() {
	return {
		type: types.GET_CONTACTS,
	};
}

export function formDisplayToggle() {
	return {
		type: types.SHOW_FORM,
	};
}

export function editContact(contact) {
	return {
		type: types.EDIT_CONTACT,
		payload: contact,
	};
}
