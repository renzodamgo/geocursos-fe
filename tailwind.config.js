const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			sans: ['var(--font-inter)', ...fontFamily.sans],
			serif: ['var(--font-amiri)', ...fontFamily.serif],
		},
		extend: {
			colors: {
				'primary': 'hsl(104, 100%, 38%)',
				'secondary': '#367B84',
				'gray': '#F2F2F2',
				'solid-gray': '#919191',
				'black': '#131313',
			},
		},
	},
	plugins: [],
};
