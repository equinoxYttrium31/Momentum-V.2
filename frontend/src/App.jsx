import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import NavbarComponent from './components/static-components/jsx/navbar-component';

const Homepage = React.lazy(() => import('./pages/jsx/homepage-pages'));
const LoginComponent = React.lazy(() =>
	import('./components/static-components/jsx/authentication-components/login-component'),
);
const SignUpComponent = React.lazy(() =>
	import('./components/static-components/jsx/authentication-components/signup-component'),
);

function App() {
	return (
		<Router>
			<div className='app-container-main'>
				<div className='app-container-navbar'>
					<NavbarComponent />
				</div>

				<Toaster position='bottom-right' />

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
						<Route
							path='/login'
							element={<LoginComponent />}
						/>
						<Route
							path='/signup'
							element={<SignUpComponent />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
