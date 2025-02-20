import { useState, useEffect } from 'react';

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(null); // Start as null to prevent flicker

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const isDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);

		setDarkMode(isDark);
		document.documentElement.classList.toggle('dark', isDark);
	}, []);

	const toggleTheme = () => {
		if (darkMode === null) return; // Prevent toggling before state is set

		const newMode = !darkMode;
		setDarkMode(newMode);
		localStorage.setItem('theme', newMode ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', newMode);
	};

	// Prevent flicker by not rendering the button until theme is determined
	if (darkMode === null) return null;

	return (
		<button
			onClick={toggleTheme}
			className='p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md btn-theme'
		>
			{darkMode ? 'Light Mode' : 'Dark Mode'}
		</button>
	);
};

export default ThemeToggle;
