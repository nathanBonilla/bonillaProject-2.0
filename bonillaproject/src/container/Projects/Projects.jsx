import React from 'react'
import { motion } from 'framer-motion';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import { AppWrap } from '../../wrapper';
import './Projects.scss'

const projects = [
	{ title: 'Project 1', description: 'Description' },
	{ title: 'Project 2', description: 'Description' },
	{ title: 'Project 3', description: 'Description' },
	{ title: 'Project 4', description: 'Description' }
]

const Projects = () => {
  	return (
		<div className="app__projects">
					<ParallaxProvider>
						<Parallax translateY={['-10vh', '50vh']}>
							<h1>Projects</h1>
						</Parallax>
					</ParallaxProvider>
			{projects.map((project, index) => (
				<div className="projects__card">
					<h2 className="bold-text" style={{ marginTop: 20}}>
						{project.title}
					</h2>
					<p className="p-text" style={{ marginTop: 10}}>
						{project.description}
					</p>
					{/* <button>GitHub</button>
					<button>Live Code</button> */}
				</div>
			))}
		</div>  
  	)
}

export default Projects