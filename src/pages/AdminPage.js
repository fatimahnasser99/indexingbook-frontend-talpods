import React from 'react';
import { useState } from 'react';

import { contacts } from '../data';
import Navbar from '../components/Navbar';
import ContactsTable from '../components/ContactsTable';
import Form from '../components/Form';

const AdminPage = () => {
	const indexList = contacts.indexArray;
	const contactsList = contacts;
	const [form, formState] = useState(false);

	const formClass = form ? 'formContainer' : 'hideForm';
	function showForm() {
		formState(true);
	}
	return (
		<div>
			<Navbar isAdmin={true} />
			<div className='adminPageContainer'>
				<button className='addContact' onClick={showForm}>
					Add Contact
				</button>
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
