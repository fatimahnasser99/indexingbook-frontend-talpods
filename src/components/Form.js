import React from 'react';
const Form = (props) => {
	return (
		<form>
			<div className='centerDiv'>
				<strong>Add New Contact</strong>
			</div>
			<label for='name'>Name:</label>
			<br />
			<input type='text' id='name' name='name' value='John Doe'></input>
			<br />
			<br />
			<label for='phone'>Phone number:</label>
			<br />
			<input type='number' id='phone' name='phone' value='92484758'></input>
			<br />
			<br />
			<label for='email'>Email:</label>
			<br />
			<input
				type='email'
				id='email'
				name='email'
				value='example@gmail.com'></input>
			<br />
			<br />
			<div className='centerDiv'>
				<input id='submit' type='submit' value='Add'></input>
			</div>
		</form>
	);
};

export default Form;
