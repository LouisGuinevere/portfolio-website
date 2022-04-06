import React from 'react'
import ServiceList from "./ServiceList"
import "./services.css"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <ServiceList 
          title="UI/UX Design"
          contents={[
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit"
          ]}
        />
        <ServiceList
          title="Web Development"
          contents={[
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit"
          ]}
        />
        <ServiceList
          title="Content Creator"
          contents={[
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit",
            "Lorem ipsum dolor sit amet consectetur elit"
          ]}
        />
      </div>
    </section>
  )
}

export default Services