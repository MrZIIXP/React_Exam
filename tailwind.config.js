/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: {max: "510px"},
			md: {min: "510px", max: "1024px"}
		}
	},
	plugins: [],
}
