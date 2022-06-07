import React from 'react';

import ContactsBook from '../components/ContactsBook';
import ContactDetails from '../components/ContactDatails';
import Navbar from '../components/Navbar';

const ContanctsPage = () => {
	const contactDetailsList = [
		{ name: 'Anna', phone: 71406958, email: 'anna@gmail.com' },
		{ name: 'Aya', email: 'aya@gmail.com' },
	];
	return (
		<div>
			<Navbar isAdmin={false} />
			<div className='ContactsPageBodyContainer'>
				<ContactsBook />
				<ContactDetails contactDetailsList={contactDetailsList} />
			</div>
		</div>
	);
};

export default ContanctsPage;
