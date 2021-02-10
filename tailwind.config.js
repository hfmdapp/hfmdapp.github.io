module.exports = {
	purge: [
		'./src/**/*.html',
    './src/**/*.js',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
      fontFamily: {
        'sans': ['Prompt']
      }
    },
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
