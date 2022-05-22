import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Hero.scss';

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
				<button>My Resume</button>
			</motion.div>

			<motion.div
			whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			transition={{ delay: .5, duration: 0.5 }}
			className="app__hero-links"
			>
				<FaGithub />
				<FaLinkedin />
			</motion.div>
      	</div>
    )
}


export default AppWrap(Hero, 'home')