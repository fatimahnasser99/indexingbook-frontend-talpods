import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import AdminPage from './pages/AdminPage';
import ContanctsPage from './pages/ContactsPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/admin' exact element={<AdminPage />} />
					<Route path='/user' exact element={<ContanctsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
