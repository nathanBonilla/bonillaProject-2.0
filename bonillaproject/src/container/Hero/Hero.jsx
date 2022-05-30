import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './Hero.scss';
import { resume } from '../../constants';

const Hero = () => {
    return (
      	<div id="home" className="app__hero app__flex">
			<motion.div
				whileInView={{ x: [-200, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__hero-role"
			>
				<div style={{ marginLeft: 20 }}>
					<h1 className="head-text">Software <span>DEVELOPER</span></h1>
				</div>
			</motion.div>

			<motion.div
			whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			transition={{ delay: 0.25, duration: 0.5 }}
			className="app__hero-name"
			>
				<div>
					<h2 className="head-text-secondary">Nathan Bonilla</h2>
				</div>

			</motion.div>

			<motion.div
			whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			transition={{ delay: .35, duration: 0.5 }}
			className="app__hero-resume"
			>
				<a href={ resume } target="_blank"><button>My Resume</button></a>
			</motion.div>

			<motion.div
			whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			transition={{ delay: .5, duration: 0.5 }}
			className="app__hero-links"
			>
				<a href="https://github.com/nathanBonilla" target="_blank">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/nathan-bonilla/" target="_blank">
					<FaLinkedin />
				</a>
			</motion.div>
      	</div>
    )
}


export default Hero;