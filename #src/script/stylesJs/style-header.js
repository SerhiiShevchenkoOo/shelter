/* eslint quotes: [2, "backtick", "avoid-escape"] */
export default {
	header: `flex justify-between items-center md:h-medium-head h-small-head pt-2  lg:h-1/5`,
	logoWrapper: `w-max-min`,
	logo: `mb-3`,
	subtitle: `text-light-xl text-sm font-arial tracking-wider text-center`,
	nav: ` z-20 md:w-3/5 lg:w-2/5 w-3/5 mini:w-full 
			md:h-auto h-screen
			md:bg-transperent
			bg
			flex items-center justify-center md:block
         text-3xl md:text-base 
      	text-light-s
		   fixed  top-0 right-0
	   	md:static
		   transform md:translate-x-0
			transition-all duration-500`,
	ul: `flex flex-col h-2/5 md:flex-row 
		justify-between items-center`,
	li: `relative leading-160`,
	activeLink: `absolute bottom-0 link h-3p w-full bg-primary border  border-solid border-black`,
	burger: `relative z-30 w-16 h-12  transition-all duration-500 ease-in-out `,
	span: `z-30 h-1 rounded block w-full left-0 transition-all
		 duration-500 bg-primary transform absolute`,
};
