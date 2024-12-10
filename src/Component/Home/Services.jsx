import React, { useState } from 'react'
import { services } from '../../assets/services.js'

const ServiceBox = ({ img, title, description }) => (
  <div className="col-sm-6 col-md-4 mx-auto">
    <div className="box" style={{ cursor: 'pointer' }}>
      <div className="img-box">
        <img src={img} alt={title} />
      </div>
      <div className="detail-box">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  </div>
)

const Services = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedServices = showAll ? services : services.slice(0, 3)
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {displayedServices.map((service, index) => (
            <ServiceBox
              key={index}
              img={service.img}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="btn-box">
          <a onClick={() => setShowAll(!showAll)} style={{ cursor: 'pointer' }}>
            {showAll ? 'Show Less' : 'View More'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
