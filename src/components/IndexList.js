import React from 'react';
import '../App.css';

const IndexList = (props) => {
	function displayIndex(index) {
		let important =
			index === props.selectedIndex ? <strong>{index}</strong> : index;
		return <button className='index'>{important}</button>;
	}
	return <div className='indexList'>{props.indexList.map(displayIndex)}</div>;
};

export default IndexList;
