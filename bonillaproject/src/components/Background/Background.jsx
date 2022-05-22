import React from 'react'

import './Background.scss'
import { images } from '../../constants'

const Background = () => {
  return (
    <img className="background" src={images.background} alt="background" />
  )
}

export default Background