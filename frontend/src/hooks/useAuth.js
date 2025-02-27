import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const apiUrl = import.meta.env.VITE_AXIOS_URL;

	// Function to refresh authentication state
	const checkAuth = useCallback(async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${apiUrl}/dashboard`, {
				withCredentials: true,
			});
			setIsAuthenticated(response.status === 200 && response.data.authenticated);
		} catch (error) {
			setIsAuthenticated(false);
		} finally {
			setLoading(false);
		}
	}, [apiUrl]);

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	// Make sure checkAuth is included in return
	return { isAuthenticated, loading, checkAuth };
};

export default useAuth;
