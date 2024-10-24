import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowRight, FaArrowLeft, FaStar } from 'react-icons/fa'

import clients from '../../../public/client'

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalClients = clients.length

  // Navigate to the previous client
  const prevClient = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalClients - 1 : prevIndex - 1
    )
  }

  // Navigate to the next client
  const nextClient = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalClients - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="client_section">
      <div className="container position-relative">
        <div className="heading_container heading_center">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="carousel-wrap layout_padding2-top">
          <div className="row justify-content-center">
            <div className="col-md-8 position-relative">
              {/* Display current client */}
              <div className="card text-center">
                <div className="card-body">
                  <div className="client_id">
                    <div className="img-box mb-3">
                      <img
                        src={clients[currentIndex].image}
                        alt={clients[currentIndex].name}
                        className="rounded-circle img-fluid"
                        style={{ width: '150px' }}
                      />
                    </div>
                    <div className="client_detail">
                      <h6>{clients[currentIndex].name}</h6>
                      <div className="rating">
                        {[...Array(5)].map((star, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="client_text mt-4">
                    <p>{clients[currentIndex].review}</p>
                  </div>
                </div>
              </div>

              {/* Left and Right Navigation buttons */}
              <button
                className="btn btn-primary position-absolute"
                style={{
                  top: '50%',
                  left: '0', // Adjusted to make it responsive
                  transform: 'translateY(-50%)',
                  zIndex: 1, // Ensure button is above content
                }}
                onClick={prevClient}
              >
                <FaArrowLeft />
              </button>
              <button
                className="btn btn-primary position-absolute"
                style={{
                  top: '50%',
                  right: '0', // Adjusted to make it responsive
                  transform: 'translateY(-50%)',
                  zIndex: 1, // Ensure button is above content
                }}
                onClick={nextClient}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client

