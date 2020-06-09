import GAnalytics from 'ganalytics';
import App from './App.svelte';
import './index.css';

window.app = new App({
	target: document.querySelector('#app')
});

if (process.env.NODE_ENV === 'production') {
	// add google analytic here
	window.ga = new GAnalytics('UA-XXXXXXXX-X');

	// Service Worker registration
	require('offline-plugin/runtime').install();
}
