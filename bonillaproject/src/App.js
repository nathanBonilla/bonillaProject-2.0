import React from 'react'

import { About, Footer, Hero, Projects } from './container';
import { Background, Navbar } from './components';
import background from './assets/background.jpg'
import './App.scss';

const App = () => {
  	return (
		<div className='app'>
			<div className="background"
			// style={{ backgroundImage: `url(${background})` }}
			>
				<Navbar />
				<Hero />
				<Projects />
			</div>
				<About />
				<Footer />
		</div>
  	);
}

export default App