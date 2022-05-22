import React from 'react'

import { About, Footer, Hero, Projects } from './container';
import { Background, Navbar } from './components';
import './App.scss';

const App = () => {
  	return (
		<div className='app'>
			{/* <Background /> */}
			<Navbar />
			<Hero />
			<Projects />
			<About />
			<Footer />
		</div>
  	);
}

export default App