import SidebarComponent from '../../components/static-components/jsx/dashboard-components/side-bar-component';
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '../css/dashboard-pages.css';

const DashboardHome = React.lazy(() => import('./dashboard-home'));

function Dashboard() {
	return (
		<div className='dashboard-container-main'>
			<div className='dashboard-sidebar-container'>
				<SidebarComponent />
			</div>
			<div className='dashboard-content-container'>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route
							path='/'
							element={<DashboardHome />}
						/>
						<Route
							path='/settings'
							element={''}
						/>
						<Route
							path='*'
							element={<Navigate to='/dashboard/' />}
						/>
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}

export default Dashboard;
