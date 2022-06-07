import React from 'react';

const ContactDetails = (props) => {
	function DisplayContactCard(cardDetails) {
		return (
			<div className='contactCard'>
				<svg
					width='40'
					height='40'
					viewBox='0 0 40 40'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M10.809 30.714C17.654 29.714 22.367 29.8 29.221 30.749C29.7174 30.821 30.1709 31.0701 30.4979 31.4504C30.8249 31.8307 31.0033 32.3165 31 32.818C31 33.298 30.835 33.764 30.537 34.128C30.0176 34.7626 29.4855 35.3868 28.941 36H31.582C31.748 35.802 31.915 35.6 32.084 35.395C32.6772 34.6676 33.0007 33.7576 33 32.819C33 30.794 31.522 29.049 29.495 28.769C22.479 27.798 17.575 27.705 10.52 28.736C8.472 29.035 7 30.807 7 32.846C7 33.751 7.295 34.646 7.854 35.371C8.019 35.585 8.182 35.795 8.344 36.001H10.921C10.4144 35.3945 9.92032 34.7777 9.439 34.151C9.15296 33.7758 8.99866 33.3168 9 32.845C9 31.768 9.774 30.865 10.809 30.714ZM20 21C20.7879 21 21.5681 20.8448 22.2961 20.5433C23.0241 20.2417 23.6855 19.7998 24.2426 19.2426C24.7998 18.6855 25.2417 18.0241 25.5433 17.2961C25.8448 16.5681 26 15.7879 26 15C26 14.2121 25.8448 13.4319 25.5433 12.7039C25.2417 11.9759 24.7998 11.3145 24.2426 10.7574C23.6855 10.2002 23.0241 9.75825 22.2961 9.45672C21.5681 9.15519 20.7879 9 20 9C18.4087 9 16.8826 9.63214 15.7574 10.7574C14.6321 11.8826 14 13.4087 14 15C14 16.5913 14.6321 18.1174 15.7574 19.2426C16.8826 20.3679 18.4087 21 20 21ZM20 23C22.1217 23 24.1566 22.1571 25.6569 20.6569C27.1571 19.1566 28 17.1217 28 15C28 12.8783 27.1571 10.8434 25.6569 9.34315C24.1566 7.84285 22.1217 7 20 7C17.8783 7 15.8434 7.84285 14.3431 9.34315C12.8429 10.8434 12 12.8783 12 15C12 17.1217 12.8429 19.1566 14.3431 20.6569C15.8434 22.1571 17.8783 23 20 23Z'
						fill='#000F92'
					/>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2C10.059 2 2 10.059 2 20C2 29.941 10.059 38 20 38ZM20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40Z'
						fill='#000F92'
					/>
				</svg>

				<div>
					<strong>Name:</strong> {cardDetails.name} <br />
					<strong>Phone Number:</strong>{' '}
					{cardDetails.phone ? cardDetails.phone : 'N/A'} <br />
					<strong>Email:</strong>{' '}
					{cardDetails.email ? cardDetails.email : 'N/A'} <br />
				</div>
				<svg
					width='20'
					height='20'
					className='deleteCard'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M4.64599 4.64599C4.69244 4.59943 4.74761 4.56249 4.80836 4.53728C4.8691 4.51207 4.93423 4.4991 4.99999 4.4991C5.06576 4.4991 5.13088 4.51207 5.19163 4.53728C5.25237 4.56249 5.30755 4.59943 5.35399 4.64599L7.99999 7.29299L10.646 4.64599C10.6925 4.59951 10.7477 4.56263 10.8084 4.53747C10.8691 4.51231 10.9342 4.49936 11 4.49936C11.0657 4.49936 11.1308 4.51231 11.1916 4.53747C11.2523 4.56263 11.3075 4.59951 11.354 4.64599C11.4005 4.69248 11.4374 4.74767 11.4625 4.80841C11.4877 4.86915 11.5006 4.93425 11.5006 4.99999C11.5006 5.06574 11.4877 5.13084 11.4625 5.19158C11.4374 5.25232 11.4005 5.30751 11.354 5.35399L8.70699 7.99999L11.354 10.646C11.4005 10.6925 11.4374 10.7477 11.4625 10.8084C11.4877 10.8691 11.5006 10.9342 11.5006 11C11.5006 11.0657 11.4877 11.1308 11.4625 11.1916C11.4374 11.2523 11.4005 11.3075 11.354 11.354C11.3075 11.4005 11.2523 11.4374 11.1916 11.4625C11.1308 11.4877 11.0657 11.5006 11 11.5006C10.9342 11.5006 10.8691 11.4877 10.8084 11.4625C10.7477 11.4374 10.6925 11.4005 10.646 11.354L7.99999 8.70699L5.35399 11.354C5.30751 11.4005 5.25232 11.4374 5.19158 11.4625C5.13084 11.4877 5.06574 11.5006 4.99999 11.5006C4.93425 11.5006 4.86915 11.4877 4.80841 11.4625C4.74767 11.4374 4.69248 11.4005 4.64599 11.354C4.59951 11.3075 4.56263 11.2523 4.53747 11.1916C4.51231 11.1308 4.49936 11.0657 4.49936 11C4.49936 10.9342 4.51231 10.8691 4.53747 10.8084C4.56263 10.7477 4.59951 10.6925 4.64599 10.646L7.29299 7.99999L4.64599 5.35399C4.59943 5.30755 4.56249 5.25237 4.53728 5.19163C4.51207 5.13088 4.4991 5.06576 4.4991 4.99999C4.4991 4.93423 4.51207 4.8691 4.53728 4.80836C4.56249 4.74761 4.59943 4.69244 4.64599 4.64599Z'
						fill='#FF0000'
					/>
				</svg>
			</div>
		);
	}
	if (props.contactDetailsList) {
		return (
			<div className='contactDetailsContainer'>
				{props.contactDetailsList.map(DisplayContactCard)}
			</div>
		);
	}
	return null;
};

export default ContactDetails;