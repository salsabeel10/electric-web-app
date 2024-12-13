import React from 'react'
import Contact from '../Home/Contact'
import Header from '../Home/Header'
import Info from '../Home/Info'

import './contact.css'

const ContactPage = () => {
  return (
    <div className='main'>
        <Header />
        <Contact />
        <Info />
    </div>
  )
}

export default ContactPage