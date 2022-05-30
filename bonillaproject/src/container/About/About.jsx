import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import { images } from '../../constants';
import './About.scss'

const abouts = [
	{ title: 'From the Ground Up', description: 'BonillaProject.com is a fully fledged AWS environment. EC2 Ubuntu Linux, load balancers, server management scripts and more; Building it myself from the ground up and configuring every component of the backend system is something I am tremendously proud of.', imgUrl: images.data },
	{ title: 'Skills Showcase', description: "Utilizing React and Django, I'm able to fully bring my ideas to fruition!  Parallax effects, smooth motion animations!  I'm excited to see my progress as a developer. The sky is the limit!", imgUrl: images.canvas },
	{ title: 'This Is Just The Beginning', description: "If you reached this slide, then you're officially part of my journey. I'm honored to have you here. We'll run into trouble, and there'll be tough times, but most of all, we're gonna have fun. Get ready, and get comfortable. WE STILL HAVE WORK TO DO.", imgUrl: images.fireworks },
]

const About = () => {
  	return (
    	<div id="about" className="app__about">
			{/* <h2 className="head-text">
				What's the <span>Big</span> Deal?
			</h2> */}
			<div className="about__card-holder">
				{abouts.map((about, index) => (
					<div className="about__card">
						<h2 className="bold-text" style={{ marginTop: 20}}>
							<span>{about.title}</span>
							<p>{'\n'}</p>{about.description}
						</h2>
						<img src={about.imgUrl} alt={about.title} />
						{/* <p className="p-text" style={{ marginTop: 10}}>
							{about.description}
						</p> */}
					</div>
				))}
			</div>
			<ParallaxProvider>
				<Parallax translateY={['-130vh', '-40vh']}>
					<h1>About</h1>
				</Parallax>
			</ParallaxProvider>
    	</div>
  	)
}

export default About;