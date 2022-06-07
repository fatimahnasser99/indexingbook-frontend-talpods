import React from 'react';
import '../App.css';

import IndexList from './IndexList';
import ContactsList from './ContactsList';

const ContactsBook = () => {
	const indexList = ['A'];
	const contactsList = ['Anna', 'Aya'];

	return (
		<div className='loggedinBookContainer'>
			<ContactsList contactsList={contactsList} selectedIndex='A' />
			<IndexList indexList={indexList} selectedIndex='A' />
		</div>
	);
};

export default ContactsBook;
