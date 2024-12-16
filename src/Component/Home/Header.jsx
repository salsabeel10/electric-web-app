import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { email, num } from '../../assets/client'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="row contact_nav">
              {/* Phone section */}
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
                <a className="d-flex align-items-center">
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
                  <li
                    className={`nav-item ${
                      location.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === '/about' ? 'active' : ''
                    }`}
                  >
                    <Link className="nav-link" to="/about">
                      {' '}
                      About
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === '/service' ? 'active' : ''
                    }`}
                  >
                    <Link className="nav-link" to="/service">
                      Services
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === '/contact' ? 'active' : ''
                    }`}
                  >
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
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
