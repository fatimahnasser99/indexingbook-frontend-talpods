import React from 'react';
//import { deleteContact } from '../services';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';
const ContactsTable = (props) => {
	const index_state = useSelector((state) => state.indexList);
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
					props.contactsList[index].map(displayRow)
				)}

				{/* {mycontacts.indexArray.map((index) =>
					mycontacts[index].map((contact) => displayRow(contact))
				)} */}
			</tbody>
		</table>
	);
};

export default ContactsTable;
