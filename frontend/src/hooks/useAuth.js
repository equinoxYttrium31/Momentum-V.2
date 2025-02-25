import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await axios.get('http://localhost:3000/dashboard', {
					withCredentials: true,
				});
				if (response.status === 200 && response.data.authenticated) {
					setIsAuthenticated(true);
				} else {
					setIsAuthenticated(false);
				}
			} catch (error) {
				console.error('Error:', error);
				setIsAuthenticated(false);
			} finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, []);

	return { isAuthenticated, loading };
};

export default useAuth;
