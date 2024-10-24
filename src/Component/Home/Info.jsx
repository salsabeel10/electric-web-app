import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Info = () => {
  return (
    <section className="info_section ">
      <div className="container">
        <h4>Get In Touch</h4>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="info_items">
              <div className="row">
                <div className="col-md-4">
                  <a href="">
                    <div className="item ">
                      <div className="img-box ">
                        <FaLocationDot size={25}/>
                      </div>
                      <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="">
                    <div className="item ">
                      <div className="img-box ">
                        <FaPhoneAlt size={25} />
                      </div>
                      <p>+02 1234567890</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="">
                    <div className="item ">
                      <div className="img-box">
                        <IoMdMail size={25} />
                      </div>
                      <p>demo@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-box">
        <h4>Follow Us</h4>
        <div className="box">
          <a href="">
            <FaFacebook size={23} />
          </a>
          <a href="">
            <FaTwitter size={22} />
          </a>
          <a href="">
            <FaYoutube size={22} />
          </a>
          <a href="">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Info