import SidebarComponent from '../../components/static-components/jsx/dashboard-components/side-bar-component';
import MainHeader from '../../components/static-components/jsx/dashboard-components/main-header';
import { Outlet } from 'react-router-dom';
import '../css/dashboard-pages.css';

function Dashboard() {
	return (
		<div className='dashboard-container-main'>
			<div className='dashboard-sidebar-container'>
				<SidebarComponent />
			</div>
			<div className='dashboard-content-container'>
				<div className='dashboard-content-header'>
					<MainHeader />
				</div>
				<div className='dashboard-content'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
