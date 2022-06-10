import React from 'react';
import '../App.css';

import IndexList from './IndexList';
import ContactsList from './ContactsList';
import { contacts } from '../data';

const ContactsBook = () => {
	const contactsList = contacts['A'].map((contact) => {
		return { id: contact.id, name: contact.name };
	});

	return (
		<div className='loggedinBookContainer'>
			<ContactsList contactsList={contactsList} selectedIndex='A' />
			<IndexList />
		</div>
	);
};

export default ContactsBook;
