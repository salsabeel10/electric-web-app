import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { email, num } from '../../../public/client'

const Header = () => {
  return (
    <div>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="row contact_nav">
              {/* Phone section */}
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
                <a href="" className="d-flex align-items-center">
                  <FaPhoneAlt size={19} className="pr-1 text-success" />
                  <span>Call: +971 {num}</span>
                </a>
              </div>
              {/* Email section */}
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                <a href="" className="d-flex align-items-center">
                  <IoMdMail size={25} className="pr-1 text-success" />
                  <span>Email: {email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>Highline</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      {' '}
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="service.html">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header