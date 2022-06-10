import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectIndex } from '../redux/actions/indexActions';
//import { useEffect } from 'react';
const IndexList = () => {
	const dispatch = useDispatch();
	const index_state = useSelector((state) => state.indexList);

	function displayIndex(index) {
		let important =
			index === index_state.selectedIndex ? <strong>{index}</strong> : index;
		return (
			<button className='index' onClick={() => dispatch(selectIndex(index))}>
				{important}
			</button>
		);
	}
	return (
		<div className='indexList'>{index_state.indexArray.map(displayIndex)}</div>
	);
};

export default IndexList;
