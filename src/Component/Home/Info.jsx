import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { email, location, num, whatsappNum } from '../../assets/client'
import { Link } from 'react-router-dom'

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
                  <Link>
                    <div className="item ">
                      <div className="img-box ">
                        <FaLocationDot size={25} />
                      </div>
                      <p>{location}</p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <a
                    href={`https://wa.me/+971559173869`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="item ">
                      <div className="img-box ">
                        <FaWhatsapp size={25} />
                      </div>
                      <p>+971 {whatsappNum}</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  >
                    <div className="item ">
                      <div className="img-box">
                        <IoMdMail size={25} />
                      </div>
                      <p>{email}</p>
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
          <Link>
            <FaFacebook size={23} />
          </Link>
          <Link>
            <FaTwitter size={22} />
          </Link>
          <Link>
            <FaYoutube size={22} />
          </Link>
          <Link>
            <FaInstagram size={22} />
          </Link>
          <Link>
            <FaWhatsapp size={22} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Info
