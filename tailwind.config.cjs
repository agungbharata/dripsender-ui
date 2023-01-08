/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,svelte}'],
	theme: {},
	variants: {
		extend: {
		  backgroundColor: ['active'],
		  // ...
		  borderColor: ['focus-visible', 'first'],
		  // ...
		  textColor: ['visited'],
		}
	  },
  plugins: [
	require('@tailwindcss/aspect-ratio','@tailwindcss/typography'),
],

};
