import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';
const ContactsTable = () => {
	const index_state = useSelector((state) => state.indexList);
	const contacts_state = useSelector((state) => state.contactsList);
	function displayRow(contact) {
		return (
			<TableRow
				name={contact.name}
				phone={contact.phone}
				email={contact.email}
				id={contact.id}
			/>
		);
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Phone Number</th>
					<th>Email</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{index_state.indexArray.map((index) =>
					contacts_state.contactList[index].map(displayRow)
				)}
			</tbody>
		</table>
	);
};

export default ContactsTable;
