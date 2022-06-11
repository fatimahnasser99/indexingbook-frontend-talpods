import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addNewContact, editContact } from '../services';
import { formDisplayToggle } from '../redux/actions/contactsActions';
const Form = (props) => {
	const dispatch = useDispatch();

	const [state, setState] = useState({
		name: props.contact ? props.contact.name : '',
		email: props.contact ? props.contact.email : '',
		phone: props.contact ? props.contact.phone : '',
		...props.contact,
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const submitForm = async (e) => {
		e.preventDefault();
		dispatch(formDisplayToggle());
		if (props.contact) {
			const prevIndex = props.contact.name[0].toUpperCase();
			console.log(editContact(state, prevIndex));
		} else console.log(addNewContact(state));
	};
	return (
		<form onSubmit={submitForm}>
			<div className='toRight'>
				<svg
					width='20'
					height='20'
					viewBox='0 0 16 16'
					fill='none'
					onClick={() => dispatch(formDisplayToggle())}
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M4.64599 4.64599C4.69244 4.59943 4.74761 4.56249 4.80836 4.53728C4.8691 4.51207 4.93423 4.4991 4.99999 4.4991C5.06576 4.4991 5.13088 4.51207 5.19163 4.53728C5.25237 4.56249 5.30755 4.59943 5.35399 4.64599L7.99999 7.29299L10.646 4.64599C10.6925 4.59951 10.7477 4.56263 10.8084 4.53747C10.8691 4.51231 10.9342 4.49936 11 4.49936C11.0657 4.49936 11.1308 4.51231 11.1916 4.53747C11.2523 4.56263 11.3075 4.59951 11.354 4.64599C11.4005 4.69248 11.4374 4.74767 11.4625 4.80841C11.4877 4.86915 11.5006 4.93425 11.5006 4.99999C11.5006 5.06574 11.4877 5.13084 11.4625 5.19158C11.4374 5.25232 11.4005 5.30751 11.354 5.35399L8.70699 7.99999L11.354 10.646C11.4005 10.6925 11.4374 10.7477 11.4625 10.8084C11.4877 10.8691 11.5006 10.9342 11.5006 11C11.5006 11.0657 11.4877 11.1308 11.4625 11.1916C11.4374 11.2523 11.4005 11.3075 11.354 11.354C11.3075 11.4005 11.2523 11.4374 11.1916 11.4625C11.1308 11.4877 11.0657 11.5006 11 11.5006C10.9342 11.5006 10.8691 11.4877 10.8084 11.4625C10.7477 11.4374 10.6925 11.4005 10.646 11.354L7.99999 8.70699L5.35399 11.354C5.30751 11.4005 5.25232 11.4374 5.19158 11.4625C5.13084 11.4877 5.06574 11.5006 4.99999 11.5006C4.93425 11.5006 4.86915 11.4877 4.80841 11.4625C4.74767 11.4374 4.69248 11.4005 4.64599 11.354C4.59951 11.3075 4.56263 11.2523 4.53747 11.1916C4.51231 11.1308 4.49936 11.0657 4.49936 11C4.49936 10.9342 4.51231 10.8691 4.53747 10.8084C4.56263 10.7477 4.59951 10.6925 4.64599 10.646L7.29299 7.99999L4.64599 5.35399C4.59943 5.30755 4.56249 5.25237 4.53728 5.19163C4.51207 5.13088 4.4991 5.06576 4.4991 4.99999C4.4991 4.93423 4.51207 4.8691 4.53728 4.80836C4.56249 4.74761 4.59943 4.69244 4.64599 4.64599Z'
						fill='#FF0000'
					/>
				</svg>
			</div>
			<div className='formTitle'>
				<strong>Add New Contact</strong>
			</div>

			<label htmlFor='name'>Name:</label>
			<br />
			<input
				type='text'
				id='name'
				name='name'
				value={state.name}
				onChange={handleChange}
				required></input>
			<br />
			<br />
			<label htmlFor='phone'>Phone number:</label>
			<br />
			<input
				type='string'
				id='phone'
				name='phone'
				value={state.phone}
				onChange={handleChange}
				required></input>
			<br />
			<br />
			<label htmlFor='email'>Email:</label>
			<br />
			<input
				type='email'
				id='email'
				name='email'
				value={state.email}
				onChange={handleChange}
				required></input>
			<br />
			<br />
			<div className='centerDiv'>
				<input id='submit' type='submit' value='Add'></input>
			</div>
		</form>
	);
};

export default Form;
