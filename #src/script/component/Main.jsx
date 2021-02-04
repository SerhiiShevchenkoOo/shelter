import React from 'react';
import Header from './Header';
import images from '../../assets/images/images';
import Footer from './Footer';
import style from '../stylesJs/style-component';
import About from './About';
import Friends from './Friends';
import Help from './Help';
import Donation from './Donation';
import headerStyle from '../stylesJs/style-header';
import { Link } from 'react-router-dom';
function Main() {
	return (
		<>
			<main className={style.main.box}>
				<div className={`${style.container} flex flex-col   h-full`}>
					<Header
						st={headerStyle.header}
						h1='pb-1'
						subtitle={headerStyle.subtitle}
						ul={headerStyle.ul}
					/>
					<article className={style.main.content}>
						<section className={style.main.textContent}>
							<h2 className={style.main.title}>
								Not only people <br /> need a house
							</h2>
							<p className={style.main.subtitle}>
								We offer to give a chance to a little and nice puppy
								with an extremely wide and open heart. He or she will
								love you more than anybody else in the world, you will
								see!
							</p>
							<Link to='/our-pets'>
								<button>Make a friend</button>
							</Link>
						</section>
						<div className={style.main.imageBox}>
							{' '}
							<img
								src={images.startPuppi}
								alt={images.startPuppi}
								className={style.main.image}
							/>
						</div>
					</article>
				</div>
			</main>
			<About />
			<Friends />
			<Help />
			<Donation />
			<Footer />
		</>
	);
}

export default Main;
