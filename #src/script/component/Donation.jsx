import React from 'react';
import style from '../stylesJs/style-component';
import images from '../../assets/images/images';

function Donation() {
	return (
		<article className={style.donation.box}>
			<div className={style.container}>
				<section className={style.donation.contentBox}>
					<div className='order-2'>
						<img src={images.donationDogs} alt={images.donationDogs} />
					</div>
					<div className={style.donation.infoBox}>
						<h3 className={style.donation.title}>
							You can also <br /> make a donation
						</h3>
						<h5 className={style.donation.subtitle}>
							Name of the bank / Type of bank account
						</h5>
						<div className={style.donation.cardBox}>
							<img src={images.creditCard} alt={images.creditCard} />
							<p className={'md:text-xl'}>8380 2880 8028 8791 7435</p>
						</div>
						<p className={style.donation.text}>
							Legal information and lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Maecenas a ipsum at libero
							sagittis dignissim sed ac diam. Praesent ultrices maximus
							tortor et vulputate. Interdum et malesuada fames ac ante
							ipsum primis in faucibus.
						</p>
					</div>
				</section>
			</div>
		</article>
	);
}
export default Donation;
