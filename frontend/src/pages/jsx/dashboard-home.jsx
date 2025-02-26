import '../css/dashboard-home.css';
import DashboardHeader from '../../components/static-components/jsx/dashboard-components/dashboard-header';

function DashboardHome() {
	return (
		<div className='main-dashboard-container'>
			<div className='main-dashboard-header'>
				<DashboardHeader />
			</div>
		</div>
	);
}

export default DashboardHome;
