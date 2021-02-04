/* eslint quotes: 0 */
export default {
	container: `lg:mx-10 md:mx-8 mx-4 xl:max-w-screen-xl  xl:m-auto`,
	main: {
		box: `text-base bg-fon w-full relative overflow-x-hidden bg-texture h-screen `,
		content: `flex lg:flex-row flex-col  justify-between items-center h-small-body md:h-medium-body`,
		textContent: `h-full pt-6 lg:h-2/5 flex flex-col lg:items-start  justify-around items-center md:w-3/5 lg:w-2/5`,
		title: `text-center md:text-left md:self-start`,
		subtitle: `text-dark-s leading-160 text-justify lg:py-4`,
		imageBox: `h-2/5  lg:h-full flex items-end`,
		image: `object-contain object-bottom	h-small-body w-full `,
	},
	about: {
		box: `lg:flex-row flex flex-col lg:justify-evenly  items-center py-11 md:pt-20 pb-24`,
		imageBox: `order-2 lg:order-1`,
		textContent: `order-1 lg:order-2 lg:w-4/12 md:w-3/5`,
		title: `text-dark-l text-center md:text-left`,
		subtitle: `text-darx-xl text-justify  md:text-left`,
	},
	friends: {
		box: `w-full h-auto relative  bg-light-l`,
		wrapper: `flex flex-col justify-center text-center items-center md:py-24 py-11`,
		swiperWrapper: `relative inline-block w-full pb-20 md:pb-0 my-11`,
		swiperCards: `bg-light-s hover:bg-light-l transition duration-500  flex flex-col  items-center space-y-6 pb-8 rounded-xl overflow-hidden `,
		cardsImage: `w-full h-full object-contain object-center  `,
		cardsButton: ` mx-2.5 bg-transparent  border-2 border-primary border-solid`,
		arrow: `w-14 h-14 transition duration-500 hover:bg-primary-light focus:bg-primary-light  flex items-center justify-center transform
		rounded-full  z-10 absolute bottom-0 md:top-1/2  border-2 border-primary border-solid md:-translate-y-full`,
	},
	help: {
		box: `my-11 md:my-24 w-full`,
		title: `text-center mb-11`,
		imageBox: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
      md:gap-16 place-items-center text-center gap-8 `,
		cards: `flex justify-center flex-col items-center space-y-6 shake`,
	},
	donation: {
		box: `bg-light-l  md:py-20 py-11`,
		contentBox: `flex flex-col lg:flex-row-reverse lg:space-x-6 h-full items-center justify-center`,
		infoBox: `order-1 mb-11 lg:w-2/6  md:w-3/5 flex flex-col md:items-start items-center`,
		title: `text-center mb-8 md:text-left`,
		subtitle: `font-georgia tracking-wider`,
		cardBox: `my-5 flex  max-w-max lg:px-1 cursor-pointer  bg-primary py-2.5 px-4 rounded-xl 
		font-georgia tracking-wider space-x-4 items-center`,
		text: `italic lg:w-4/5 text-sm text-dark-m text-justify `,
	},

	// 2 page

	our: {
		buttons: `w-14 h-14 rounded-full  border-2 border-primary border-solid  z-10 transition duration-500   flex items-center justify-center`,
	},
};
