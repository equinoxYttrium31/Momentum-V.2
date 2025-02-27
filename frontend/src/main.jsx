import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import './index.css';
import App from './App.jsx';
import './utils/i18n.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
);
