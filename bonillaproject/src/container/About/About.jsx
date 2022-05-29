import React from 'react';
import { motion } from 'framer-motion';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss'

const abouts = [
	{ title: 'From the Ground Up', description: '', imgUrl: images.data },
	{ title: 'Skills Showcase', description: '', imgUrl: images.canvas },
	{ title: 'This Is Just The Beginning', description: '', imgUrl: images.fireworks },
]

const About = () => {
  	return (
    	<div className="app__about">
			{/* <h2 className="head-text">
				What's the <span>Big</span> Deal?
			</h2> */}
			<ParallaxProvider>
				<Parallax translateY={['-10vh', '50vh']}>
					<h1>About</h1>
				</Parallax>
			</ParallaxProvider>
			<div className="about__card-holder">
				{abouts.map((about, index) => (
					<div className="about__card">
						<h2 className="bold-text" style={{ marginTop: 20}}>
							{about.title}
						</h2>
						<img src={about.imgUrl} alt={about.title} />
						<p className="p-text" style={{ marginTop: 10}}>
							{about.description}
						</p>
					</div>
				))}
			</div>
    	</div>
  	)
}

export default About;