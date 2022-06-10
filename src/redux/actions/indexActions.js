import { types } from './types';

export function selectIndex(indexSelected) {
	return {
		type: types.SELECT_INDEX,
		payload: indexSelected,
	};
}
