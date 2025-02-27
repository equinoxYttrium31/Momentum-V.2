import React, { Suspense, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useAuth from './hooks/useAuth';
import './App.css';
import NavbarComponent from './components/static-components/jsx/navbar-component';
import FooterComponent from './components/static-components/jsx/footer-component';

const Homepage = React.lazy(() => import('./pages/jsx/homepage-pages'));
const AboutUs = React.lazy(() => import('./pages/jsx/about-us-pages'));
const ContactUs = React.lazy(() => import('./pages/jsx/contact-us-pages'));
const Dashboard = React.lazy(() => import('./pages/jsx/dashboard-pages'));
const DashboardHome = React.lazy(() => import('./pages/jsx/dashboard-home'));
const HabitsComponents = React.lazy(() =>
	import('./components/static-components/jsx/dashboard-components/habits-components'),
);
const LoginComponent = React.lazy(() =>
	import('./components/static-components/jsx/authentication-components/login-component'),
);
const SignUpComponent = React.lazy(() =>
	import('./components/static-components/jsx/authentication-components/signup-component'),
);

function App() {
	const { isAuthenticated, loading } = useAuth();
	const navigate = useNavigate();
	const previouslyAuthenticated = useRef(isAuthenticated);

	useEffect(() => {
		if (isAuthenticated && isAuthenticated !== previouslyAuthenticated.current) {
			console.log('User authenticated, navigating to dashboard...');
			previouslyAuthenticated.current = isAuthenticated;
			navigate('/dashboard');
		}
	}, [isAuthenticated, navigate]);

	console.log('isAuthenticated:', isAuthenticated); // Debugging log

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
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
						>
							<Route
								index
								element={<DashboardHome />}
							/>
							<Route
								path='settings'
								element={<div>Settings Page Placeholder</div>}
							/>
							<Route
								path='habits'
								element={<HabitsComponents />}
							/>
							<Route
								path='goals'
								element={<div>Goals Page Placeholder</div>}
							/>
							<Route
								path='insights'
								element={<div>Insights Page Placeholder</div>}
							/>
							<Route
								path='community'
								element={<div>Community Page Placeholder</div>}
							/>
						</Route>

						{/* <Route
							path='*'
							element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />}
						/> */}
					</Routes>
				</div>
			</Suspense>

			{!isAuthenticated && (
				<div className='app-container-footer'>
					<FooterComponent />
				</div>
			)}
		</div>
	);
}

export default App;
