import React from 'react';

import Navbar from '../components/Navbar';
import ContactsTable from '../components/ContactsTable';
import Form from '../components/Form';

const AdminPage = () => {
	const indexList = ['A', 'K'];
	const contactsList = {
		A: [
			{ name: 'Anna', phone: 71406958, email: 'anna@gmail.com' },
			{ name: 'Aya', email: 'aya@gmail.com' },
		],
		K: [{ name: 'Kate', email: 'kate@gmail.com' }],
	};
	let showForm = false; //change to local state later
	const formClass = showForm ? 'formContainer' : 'hideForm';
	return (
		<div>
			<Navbar isAdmin={true} />
			<div className='adminPageContainer'>
				<div className={formClass}>
					<Form />
				</div>
				<div className='tableContainer'>
					<ContactsTable contactsList={contactsList} indexList={indexList} />
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
