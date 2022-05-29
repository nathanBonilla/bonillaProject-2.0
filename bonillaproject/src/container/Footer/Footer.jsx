import React from 'react'
import { motion } from 'framer-motion';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Footer.scss'

const Footer = () => {
  return (
    <div id="home" className="app__contact-me app__flex">
		<motion.div
			whileInView={{ x: [-200, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className="app__contact-me-role"
		>
			<div style={{ marginLeft: 20 }}>
				<h1 className="head-text">Contact <span>ME</span></h1>
			</div>
		</motion.div>

		<motion.div
		whileInView={{ x: [-100, 0], opacity: [0, 1] }}
		transition={{ delay: 0.25, duration: 0.5 }}
		className="app__contact-me-name"
		>
			<div>
				<h2 className="head-text-secondary">NBonilla409@gmail.com</h2>
			</div>
		</motion.div>

		<motion.div
		whileInView={{ x: [-100, 0], opacity: [0, 1] }}
		transition={{ delay: .35, duration: 0.5 }}
		className="app__hero-links"
		>
			<FaGithub />
			<FaLinkedin />
		</motion.div>

		<div className="copyright">
		© Bonilla Project 2022. All rights reserved
		</div>
    </div>
  	)
}

export default Footer;