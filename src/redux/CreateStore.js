import { createStore, compose } from 'redux';
import allReducers from './reducers/index';

let store = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(allReducers);

export { store };
