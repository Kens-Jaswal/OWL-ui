/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#f6b5ff',
					secondary: '#c66d3d',
					accent: '#80f2bf',
					neutral: '#181921',
					'base-100': '#F1F0F5',
					info: '#5C83CC',
					success: '#19705D',
					warning: '#92560C',
					error: '#E55048'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
