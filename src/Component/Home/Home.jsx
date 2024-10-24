import React from 'react'
import Slider from './Slider'
import Header from './Header'
import Feature from './Feature'
import About from './About'
import Professional from './Professional'
import Services from './Services'
import Client from './Client'
import Contact from './Contact'
import Info from './Info'

const Home = () => {
  return (
    <div className="hero_area">
      <Header />
      <Slider />
      <Feature />
      <About />
      <Professional />
      <div>
      <Services />
      </div>
      <Client />
      <Contact />
      <Info />
    </div>
  )
}

export default Home
