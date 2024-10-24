import React from 'react'

const Contact = () => {
  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex ">
                <button>SEND</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                {/* here i want dubai map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.032842704!2d54.89781361736574!3d25.07565836217938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1729753743183!5m2!1sen!2sae"
                  width="600"
                  height="360"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
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
