import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

import './Footer.scss'

const Footer = () => {
  return (
    <div id="contact me" className="app__contact-me app__flex">
		<motion.div
			whileInView={{ x: [-200, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className="app__contact-me-role"
		>
			<div style={{ marginLeft: 20 }}>
				<h1>Contact Me</h1>
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
			<a href="https://github.com/nathanBonilla" target="_blank">
				<FaGithub />
			</a>
			<a href="https://www.linkedin.com/in/nathan-bonilla/" target="_blank">
				<FaLinkedin />
			</a>
			<a href="https://discordapp.com/users/335975512277254147/" target="_blank">
				<FaDiscord />
			</a>
		</motion.div>
    </div>
  	)
}

export default Footer;