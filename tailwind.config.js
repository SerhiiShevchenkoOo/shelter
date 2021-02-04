module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			flex: {
				popup: '0 0 40%',
				'footer-md': '1 1 40%',
				'footer-lg': '1 1 20%',
			},
			screens: {
				mini: { min: '320px', max: '639px' },
			},
			spacing: {
				'3p': '3px',
				'18p': '18px',
				'36p': '36px',
				'medium-head': '15%',
				'small-head': '10%',
				'medium-body': '85%',
				'small-body': '90%',
			},
			padding: {
				button: '15px 45px',
			},
			fontSize: {
				h2: [
					'44px',
					{
						lineHeight: '130%',
					},
				],
				'h2-small': [
					'25px',
					{
						lineHeight: '130%',
					},
				],
			},
			lineHeight: {
				160: '160%',
			},
			colors: {
				primary: '#F1CDB3',
				'primary-light': '#FDDCC4',
				'light-xl': '#FFFFFF',
				'light-l': '#F6F6F6',
				'light-s': '#FAFAFA',
				'dark-s': '#CDCDCD',
				'dark-3xl': '#292929',
				'dark-l': '#545454',
				'dark-xl': '#4C4C4C',
				'dark-m': '#B2B2B2',
			},
			backgroundImage: theme => ({
				fon:
					'url("/assets/images/fon.png"), radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%)',
			}),
			backgroundColor: theme => ({
				texture: '#211F20',
			}),
			maxWidth: {
				wrapper: '1280px',
			},
			fontFamily: {
				georgia: ['Georgia'],
				arial: ['Arial'],
			},
			animation: {
				opacity: 'opacity .5s ease-in',
			},
			keyframes: {
				opacity: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
