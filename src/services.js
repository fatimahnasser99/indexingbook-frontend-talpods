import { contacts } from './data';

export const addNewContact = (newContact) => {
	let index = newContact.name[0].toUpperCase();
	if (!contacts.indexArray.includes(index)) {
		contacts.indexArray.push(index);
		contacts.indexArray.sort();
	}
	if (contacts[index])
		contacts[index].push({ id: contacts.idCounter, ...newContact });
	else contacts[index] = [{ id: contacts.idCounter, ...newContact }];
	contacts.idCounter += newContact.id ? 0 : 1;

	return contacts;
};
export const deleteContact = (index, id) => {
	if (contacts[index].length === 1) {
		contacts.indexArray.splice(contacts.indexArray.indexOf(index), 1);
	}
	contacts[index] = contacts[index].filter((contact) => contact.id !== id);
	console.log(contacts);
};
export const editContact = (editedContact, prevIndex) => {
	let index = editedContact.name[0].toUpperCase();
	if (prevIndex === index)
		return contacts[index].map((contact) => {
			if (contact.id === editedContact.id) return editedContact;
			return contact;
		});
	else {
		deleteContact(prevIndex, editedContact.id);
		addNewContact(editedContact);
	}
	return contacts;
};
