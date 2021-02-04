import React from 'react';
import images from '../../assets/images/images';
import style from '../stylesJs/style-component';

function About() {
	return (
		<article className={`${style.container} ${style.about.box}`}>
			<div className={style.about.imageBox}>
				<img src={images.aboutPets} alt={images.aboutPets} />
			</div>
			<section className={style.about.textContent}>
				<h3 className={style.about.title}>
					About the shelter “Cozy House”
				</h3>
				<p className={`${style.about.subtitle} my-6`}>
					Currently we have 121 dogs and 342 cats on our hands and
					statistics show that only 20% of them will find a family. The
					others will continue to live with us and will be waiting for a
					lucky chance to become dearly loved.
				</p>
				<p className={`${style.about.subtitle} mb-11`}>
					We feed our wards with the best food and make sure that they do
					not get sick, feel comfortable (including psychologically) and
					well. We are supported by 87 volunteers and 28 employees of
					various skill levels. About 12% of the animals are taken by the
					shelter staff. Taking care of the animals, they become attached
					to the pets and would hardly ever leave them alone.
				</p>
			</section>
		</article>
	);
}

export default About;
