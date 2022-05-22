import React from 'react';
import { motion } from 'framer-motion';

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
    	<>
			<h2 className="head-text">
				What's the <span>Big</span> Deal?
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={about.imgUrl} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20}}>{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10}}>
						{about.description}
						</p>
						
					</motion.div>
				))}
			</div>
    	</>
  	)
}

export default AppWrap(About, 'about');