import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/static-components/jsx/navbar-component';

const Homepage = React.lazy(() => import('./pages/jsx/homepage-pages'));

function App() {
	return (
		<Router>
			<div className='app-container-main'>
				<div className='app-container-navbar'>
					<NavbarComponent />
				</div>

				<div className='app-container-Homepage'>
					<Routes>
						<Route
							path='/'
							element={<Homepage />}
						/>
						<Route
							path='/about'
							element={''}
						/>
						<Route
							path='/contact'
							element={''}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
