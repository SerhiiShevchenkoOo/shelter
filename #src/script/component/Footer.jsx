import React from 'react';
import style from '../stylesJs/style-component';
import phoneImage from '../../assets/images/footer/phone.svg';
import mailImage from '../../assets/images/footer/mail.svg';
import locationImage from '../../assets/images/footer/pin.svg';
import footerDog from '../../assets/images/footer/footer-puppy.png';

function Footer() {
	return (
		<footer
			className={'bg-fon bg-texture font-geoh4 pt-5 flex justify-center'}>
			<article
				className={
					`${style.container} ` +
					'lg:items-start   lg:justify-around flex flex-col md:justify-center md:flex-row md:flex-wrap lg:flex-nowrap space-y-6 md:space-y-0 md:space-x-8  md:text-left'
				}>
				<section
					className={
						'lg:w-2/6 lg:pt-6 text-primary lg:flex-none  items-center md:items-start text-xl flex flex-col space-y-6 flex-footer-md'
					}>
					<h3
						className={
							'text-light-l text-h2-small md:text-4xl text-center md:text-left'
						}>
						For questions and suggestions
					</h3>
					<a
						href='mailto:contact@test.com'
						className={
							'flex items-center space-x-4 transform hover:scale-90 transition  duration-300'
						}>
						<img src={mailImage} alt={mailImage} />
						<h4>email@shelter.com</h4>
					</a>
					<a
						href='tel:+13 674 567 75 54'
						className={
							'flex items-center space-x-4 transform hover:scale-90 transition  duration-300'
						}>
						<img src={phoneImage} alt={phoneImage} />
						<h4>+13 674 567 75 54</h4>
					</a>
				</section>
				<section
					className={`lg:w-2/6 lg:pt-6 text-primary lg:flex-none space-y-6 flex-footer-md md:mt-0
                      text-xl text-h2-small md:text-4xl text-center md:text-left flex flex-col `}>
					<h3
						className={
							'text-light-l text-h2-small md:text-4xl tracking-wider'
						}
						target='blanc'>
						We are waiting for your visit
					</h3>
					<a
						className={
							'flex items-center transform hover:scale-90 transition  duration-300 space-x-4 text-left'
						}
						href='https://www.google.com/maps/place/1+Central+St,+Framingham,+MA+01701,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@42.3253665,-71.4023993,17z/data=!3m1!4b1!4m5!3m4!1s0x89e388b0b33023dd:0x590b8cbbc78a6635!8m2!3d42.3253626!4d-71.4002106?hl=uk'>
						<img src={locationImage} alt={locationImage} />
						<h4>1 Central Street, Boston (entrance from the store)</h4>
					</a>
					<a
						className={
							'flex items-center space-x-4 text-left transform hover:scale-90 transition  duration-300'
						}
						href='https://www.google.com/maps/place/South+Park+Court,+18+S+Park+Rd,+London+SW19+8TD,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%96%D1%8F/@51.4202718,-0.2023686,17z/data=!3m1!4b1!4m5!3m4!1s0x487608baa7401b31:0x18e66d9fcd2f7d77!8m2!3d51.4202685!4d-0.2001799?hl=uk'
						target='blanc'>
						<img src={locationImage} alt={locationImage} />
						<h4>18 South Park, London </h4>
					</a>
				</section>
				<div className={'self-center md:m-0 lg:w-2/6 lg:pt-0  md:pt-10'}>
					<img className={''} src={footerDog} alt={footerDog} />
				</div>
			</article>
		</footer>
	);
}

export default Footer;
