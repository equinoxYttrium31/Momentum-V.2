import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useAuth from './hooks/useAuth';
import './App.css';
import NavbarComponent from './components/static-components/jsx/navbar-component';
import FooterComponent from './components/static-components/jsx/footer-component';

const Homepage = React.lazy(() => import('./pages/jsx/homepage-pages'));
const AboutUs = React.lazy(() => import('./pages/jsx/about-us-pages'));
const ContactUs = React.lazy(() => import('./pages/jsx/contact-us-pages'));
const Dashboard = React.lazy(() => import('./pages/jsx/dashboard-pages'));
const LoginComponent = React.lazy(() =>
	import('./components/static-components/jsx/authentication-components/login-component'),
);
const SignUpComponent = React.lazy(() =>
	import('./components/static-components/jsx/authentication-components/signup-component'),
);

function App() {
	const { isAuthenticated, loading } = useAuth();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<Router>
			<div className='app-container-main'>
				{!isAuthenticated && (
					<div className='app-container-navbar'>
						<NavbarComponent />
					</div>
				)}

				<Toaster position='bottom-right' />

				<Suspense fallback={<div>Loading...</div>}>
					<div className='app-container-Homepage'>
						<Routes>
							<Route
								path='/'
								element={<Homepage />}
							/>
							<Route
								path='/about'
								element={<AboutUs />}
							/>
							<Route
								path='/contact'
								element={<ContactUs />}
							/>
							<Route
								path='/login'
								element={<LoginComponent />}
							/>
							<Route
								path='/signup'
								element={<SignUpComponent />}
							/>
							<Route
								path='/dashboard'
								element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />}
							/>
						</Routes>
					</div>
				</Suspense>

				{!isAuthenticated && (
					<div className='app-container-footer'>
						<FooterComponent />
					</div>
				)}
			</div>
		</Router>
	);
}

export default App;
