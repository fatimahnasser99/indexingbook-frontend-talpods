import React from 'react';
import '../App.css';

const IndexList = (props) => {
	function displayIndex(index) {
		let className = index === props.selectedIndex ? 'indexSelected' : 'index';
		return <button className={className}>{index}</button>;
	}
	return <div className='indexList'>{props.indexList.map(displayIndex)}</div>;
};

export default IndexList;
