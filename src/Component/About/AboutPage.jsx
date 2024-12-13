import React from 'react'
import Header from '../Home/Header'
import About from '../Home/About'
import Professional from '../Home/Professional'
import './about.css'

const AboutPage = () => {
  return (
    <div>
        <div className='main-about'>
        <Header />
        <About />
        </div>
        <Professional />
    </div>
  )
}

export default AboutPage