import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../css/dashboard-components/dashboard-header.css';

function DashboardHeader() {
	const [user, setUser] = useState({});
	const apiURL = import.meta.env.VITE_AXIOS_URL;

	const fetchUser = async () => {
		try {
			const response = await axios.get(`${apiURL}/fetch-user`, { withCredentials: true });

			if (response.status === 200) {
				setUser(response.data.user);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<>
			<h1 className='dashboard-header-text'>Dashboard</h1>
			{user ? (
				<p className='dashboard-welcome-text'>Welcome {user.firstName}!</p>
			) : (
				<p className='dashboard-welcome-text'>Welcome!</p>
			)}
		</>
	);
}

export default DashboardHeader;
