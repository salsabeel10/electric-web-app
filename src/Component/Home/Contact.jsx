import React, { useState } from 'react'
import { whatsappNum } from '../../assets/client'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, number, email, message } = formData

    // Construct the WhatsApp message
    const whatsappMessage = `Hello, I would like to inquire: 
    Name: ${name}
    Phone Number: ${number}
    Email: ${email}
    Message: ${message}`

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/+971${whatsappNum}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
  }
  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            {' '}
            {/* Add col-12 for mobile responsiveness */}
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex ">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 col-12">
            {' '}
            {/* Add col-12 for mobile responsiveness */}
            <div className="map_container">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.032842704!2d54.89781361736574!3d25.07565836217938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1729753743183!5m2!1sen!2sae"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
