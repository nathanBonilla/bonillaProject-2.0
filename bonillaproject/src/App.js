import React from 'react'

import { About, Footer, Hero, Projects } from './container';
import { Background, Navbar } from './components';
import background from './assets/background.jpg'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import './App.scss';

const App = () => {
  	return (
		<div className='app'>
			{/* <div className="background">
				<Navbar />
				<Hero />
				<Projects />
			</div> */}
			<Navbar />
			<Background />
			<Hero />
			<Projects />
			<About />
			<Footer />
		</div>
	)
}

export default App