import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a Context for the authentication state
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuthContext = () => useContext(AuthContext);

// Create an AuthProvider component that will wrap your app
export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Check authentication status on initial load
		const checkAuth = async () => {
			try {
				const response = await fetch('/api/check-auth', { method: 'GET', credentials: 'include' });

				if (response.ok) {
					const data = await response.json();
					setIsAuthenticated(data.authenticated);
				} else {
					setIsAuthenticated(false);
				}
			} catch (error) {
				setIsAuthenticated(false);
			} finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, []);

	const login = (user) => {
		setIsAuthenticated(true);
		// You can store user information in localStorage or sessionStorage, or update a global state
		sessionStorage.setItem('user', JSON.stringify(user));
	};

	const logout = () => {
		setIsAuthenticated(false);
		sessionStorage.removeItem('user');
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
