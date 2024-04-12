/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				'hoverInfoButton': '#12538F',
				'blue-special': '#0A2E4F',
				'blue-experience': '#0F1520',
				'black-border': '#24272d',
				'yellow-subtitle': '#F9FEA4',
				'black-card': '#1E1E20'
			}
		}
	},
	plugins: [],
}
