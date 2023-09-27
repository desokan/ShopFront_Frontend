import React from 'react'
import './style.css'
import HeroSlider, { Slide } from 'hero-slider'
import image from './images/cosmetic.png'
const bckImg = 'https://i.imgur.com/Gu5Cznz.jpg'

const MainSlider = () => {
	return (
		<div className="div">
			<HeroSlider
				slidingAnimation="left_to_right"
				orientation="horizontal"
				initialSlide={1}
				onBeforeChange={(previousSlide, nextSlide) =>
					console.log('onBeforeChange', previousSlide, nextSlide)
				}
				onChange={(nextSlide) => console.log('onChange', nextSlide)}
				onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.33)',
				}}
				settings={{
					slidingDuration: 250,
					slidingDelay: 100,
					shouldAutoplay: true,
					shouldDisplayButtons: true,
					autoplayDuration: 5000,
				}}
				height={'800px'}
			>
				<div>
					<h1>Hello</h1>
				</div>
				<Slide
					background={{
						backgroundImage: `url(${bckImg})`,
						backgroundAttachment: 'fixed',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				{/* <Slide
					background={{
						backgroundImage: bckImg,
						backgroundAttachment: 'fixed',
					}}
				/> */}
				<Slide
					background={{
						backgroundImage: bckImg,
						backgroundAttachment: 'fixed',
					}}
				/>
			</HeroSlider>
		</div>
	)
}

export default MainSlider
