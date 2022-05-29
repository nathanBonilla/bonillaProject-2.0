import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import './Background.scss'
import { images } from '../../constants'

const Background = () => {
  return (
    <div className="background">
    <ParallaxProvider>
      <Parallax translateY={['0vh', '-50vh']}>
      <img src={images.background} alt="background" />
      </Parallax>
    </ParallaxProvider>
    </div>
  )
}

export default Background