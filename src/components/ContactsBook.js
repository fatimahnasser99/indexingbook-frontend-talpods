import React from 'react';
import '../App.css';

import IndexList from './IndexList';
import ContactsList from './ContactsList';

const ContactsBook = () => {
	return (
		<div className='loggedinBookContainer'>
			<ContactsList />
			<IndexList />
		</div>
	);
};

export default ContactsBook;
