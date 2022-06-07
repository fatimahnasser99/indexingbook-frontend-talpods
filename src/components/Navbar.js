import React from 'react';

const Navbar = (props) => {
	const title = props.isAdmin
		? "Welcome to Contact's Editing Dashboard"
		: "Welcome to Company's Contact Book";
	return <div className='navBar'> {title} </div>;
};

export default Navbar;
