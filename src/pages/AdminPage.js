import React from 'react';

import { contacts } from '../data';
import Navbar from '../components/Navbar';
import ContactsTable from '../components/ContactsTable';
import Form from '../components/Form';
import { useSelector, useDispatch } from 'react-redux';
import { formDisplayToggle } from '../redux/actions/contactsActions';
const AdminPage = () => {
	const dispatch = useDispatch();
	const form_state = useSelector((state) => state.contactsList.showForm);
	const contactToEdit = useSelector(
		(state) => state.contactsList.contactToEdit
	);

	return (
		<div>
			<Navbar isAdmin={true} />
			<div className='adminPageContainer'>
				<button
					className='addContact'
					onClick={() => dispatch(formDisplayToggle())}>
					Add Contact
				</button>
				<div className={form_state ? 'formContainer' : 'hideForm'}>
					<Form contact={contactToEdit} />
				</div>
				<div className='tableContainer'>
					<ContactsTable />
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
