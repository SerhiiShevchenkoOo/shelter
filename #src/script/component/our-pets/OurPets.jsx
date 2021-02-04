import React, { useState } from 'react';
import Header from '../Header.jsx';
import style from '../../stylesJs/style-component';
import headerStyle from '../../stylesJs/style-header';
import Footer from '../Footer.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import Popap from '../../utils/Popup.jsx';
import pets from '../../utils/pets-info';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, EffectFade]);

export default function Our() {
	const [swiper, setSwiper] = useState(null);

	const slideTo = index => swiper.slideTo(index);
	return (
		<div className='h-full '>
			<div className={` h-auto flex flex-col justify-between`}>
				<Header
					h1='pb-1 text-dark-l'
					subtitle={`${headerStyle.subtitle} text-dark-3xl`}
					ul='flex flex-col h-2/5 md:flex-row 
		justify-between items-center text-dark-l'
					st='bg-light-xl  flex justify-between items-center py-6 lg:px-10 md:px-8 px-4'
				/>
				<div className='bg-light-l py-11 text-center'>
					<h3>
						Our friends who <br /> are looking for a house
					</h3>
					<div className='pt-11'>
						<Swiper
							onSwiper={setSwiper}
							pagination={{
								clickable: true,
								el: '.pagination',
								type: 'custom',
								renderCustom: function (Swiper, current) {
									return current;
								},
							}}
							slidesPerColumnFill='row'
							slidesPerView={1}
							slidesPerColumn={3}
							breakpoints={{
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
									slidesPerColumn: 3,
								},
								1280: {
									slidesPerView: 3,
									spaceBetween: 90,
									slidesPerColumn: 3,
								},
							}}
							className={'w-full h-auto md:w-3/4'}
							spaceBetween={40}
							navigation={{
								prevEl: '.prev',
								nextEl: '.next',
								disabledClass: 'text-dark-s border-dark-s',
							}}
							// onSlideChange={() => console.log('slide change')}
							// onSwiper={(swiper) => console.log(swiper)}
						>
							{pets.map(pet => (
								<SwiperSlide key={pet.title}>
									<Popap
										info={pet.info}
										image={pet.img}
										trigger={
											<div className={style.friends.swiperCards}>
												<img
													className={style.friends.cardsImage}
													src={pet.img}
													alt={pet.img}
												/>
												<h4>{pet.title}</h4>
												<button
													className={style.friends.cardsButton}>
													learn more
												</button>
											</div>
										}
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<div
							className={`flex ${style.container} space-x-4 my-11 xl:my-11 justify-center`}>
							<h4
								onClick={() => {
									slideTo(0);
								}}
								className={`${style.our.buttons}  prev`}>
								{'<<'}
							</h4>
							<h4 className={`${style.our.buttons} prev`}>{'<'}</h4>
							<h4
								className={`${style.our.buttons} pagination bg-primary`}></h4>
							<h4 className={`${style.our.buttons} next`}>{'>'}</h4>
							<h4
								className={`${style.our.buttons}  next`}
								onClick={() => {
									slideTo(2);
								}}>
								{'>>'}
							</h4>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
