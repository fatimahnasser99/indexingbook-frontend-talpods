import React from 'react';
import { useSelector } from 'react-redux';
const ContactsList = (props) => {
	const index_state = useSelector((state) => state.indexList);
	const contacts_state = useSelector((state) => state.contactsList.contactList);
	function displayContacts(contact) {
		return (
			<div className='listItemWrapper'>
				<li key={contact.id}>{contact.name}</li>{' '}
				<svg
					className='showMore'
					width='20'
					height='20'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M30.94 15.66C29.7638 12.6176 27.722 9.98662 25.0668 8.09209C22.4116 6.19756 19.2595 5.12257 16 5C12.7405 5.12257 9.58839 6.19756 6.9332 8.09209C4.27802 9.98662 2.23616 12.6176 1.06 15.66C0.980569 15.8797 0.980569 16.1203 1.06 16.34C2.23616 19.3824 4.27802 22.0134 6.9332 23.9079C9.58839 25.8024 12.7405 26.8774 16 27C19.2595 26.8774 22.4116 25.8024 25.0668 23.9079C27.722 22.0134 29.7638 19.3824 30.94 16.34C31.0194 16.1203 31.0194 15.8797 30.94 15.66V15.66ZM16 25C10.7 25 5.1 21.07 3.07 16C5.1 10.93 10.7 7 16 7C21.3 7 26.9 10.93 28.93 16C26.9 21.07 21.3 25 16 25Z'
						fill='#000F92'
					/>
					<path
						d='M16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9109 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C22 14.4087 21.3679 12.8826 20.2426 11.7574C19.1174 10.6321 17.5913 10 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z'
						fill='#000F92'
					/>
				</svg>
			</div>
		);
	}
	if (index_state.selectedIndex) {
		const title = `"${index_state.selectedIndex}" Contacts`;
		return (
			<div className='bookcontent'>
				<div className='title'>{title}</div>
				<ul>
					{contacts_state[index_state.selectedIndex].map(displayContacts)}
				</ul>
			</div>
		);
	}
	if (index_state.indexArray.length > 0)
		return <div>select index to display contacts</div>;
	return <div> no contacts available</div>;
};

export default ContactsList;
