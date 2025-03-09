import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
	darkMode: 'class',
	plugins: [
		tailwindcss(),
		sveltekit(),
	],
	server: {
		host: true, // Expose to all network interfaces
		port: 5173  // Default Vite port
	}
});