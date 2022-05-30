import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import './Projects.scss'

const projects = [
	{ title: 'Project 1', description: 'Description', githubLink: '', liveCodeLink: '' },
	{ title: 'Project 2', description: 'Description', githubLink: '', liveCodeLink: '' },
	{ title: 'Project 3', description: 'Description', githubLink: '', liveCodeLink: '' },
	{ title: 'Project 4', description: 'Description', githubLink: '', liveCodeLink: '' }
]

const Projects = () => {
  	return (
		<div id="projects" className="app__projects">
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
					<a href={project.githubLink}><button>GitHub</button></a>
					<a href={project.liveCodeLink}><button>Live Code</button></a>
				</div>
			))}
		</div>  
  	)
}

export default Projects