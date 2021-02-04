import React from 'react';
import helpImage from '../utils/help-images';
import style from '../stylesJs/style-component';

function Help() {
	return (
		<article className={style.help.box}>
			<div className={style.container}>
				<h3 className={style.help.title}>
					How you can help <br />
					our shelter
				</h3>
				<section className={style.help.imageBox}>
					{helpImage.map((image, index) => (
						<div
							key={image.title}
							className={`${
								index > 4 && 'transform lg:translate-x-full'
							} ${style.help.cards}`}>
							<img src={image.img} alt={image.title} />
							<h4>{image.title}</h4>
						</div>
					))}
				</section>
			</div>
		</article>
	);
}

export default Help;
