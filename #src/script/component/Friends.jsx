import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade } from 'swiper';
import pets from '../utils/pets-info';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import style from '../stylesJs/style-component';
import arrow from '../../assets/images/Arrow.svg';
import Popap from '../utils/Popup.jsx';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, EffectFade]);

function Friends() {
	return (
		<article className={style.friends.box}>
			<div className={`${style.container} ${style.friends.wrapper}`}>
				<h3 className={'text-dark-l'}>
					Our friends who <br />
					are looking for a house{' '}
				</h3>
				<div className={style.friends.swiperWrapper}>
					<Swiper
						breakpoints={{
							768: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
							1280: {
								slidesPerView: 3,
								spaceBetween: 90,
							},
						}}
						className={'w-full   md:w-3/4'}
						loop
						spaceBetween={0}
						slidesPerView={1}
						navigation={{
							prevEl: '.prev',
							nextEl: '.next',
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
											<button className={style.friends.cardsButton}>
												learn more
											</button>
										</div>
									}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div
						className={`${style.friends.arrow} prev rotate-180 left-16 md:left-0`}>
						<img src={arrow} alt={arrow} />
					</div>
					<div
						className={`${style.friends.arrow} next right-16 md:right-0 `}>
						<img src={arrow} alt={arrow} />
					</div>
				</div>
				<Link to='/shelter/our-pets'>
					<button>Get to know the rest</button>
				</Link>
			</div>
		</article>
	);
}

export default Friends;
