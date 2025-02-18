import { useState, useEffect } from 'react';

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(() => {
		return (
			localStorage.getItem('theme') === 'dark' ||
			(!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
	});

	const toggleTheme = () => {
		setDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem('theme', newMode ? 'dark' : 'light');

			document.documentElement.classList.toggle('dark', newMode);
			return newMode;
		});
	};

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	return (
		<button
			onClick={toggleTheme}
			className='p-2 bg-gray-200 dark:bg-gray-800 text-[black] dark:text-white rounded-md btn-theme'
		>
			{!darkMode ? 'Dark Mode' : 'Light Mode'}
		</button>
	);
};
export default ThemeToggle;
