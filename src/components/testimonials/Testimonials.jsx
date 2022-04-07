import React from 'react'
import Testimonial from './Testimonial'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container container__testimonials" modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable: true}}>
        <SwiperSlide>
          <Testimonial
          avatar={AVTR1}
          name="Almira"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam felis, efficitur vestibulum felis sed,
                  commodo ornare purus. Quisque sem nunc, vehicula ac lobortis quis, aliquam et ipsum. Phasellus nec felis euismod,
                  dictum leo vel, ullamcorper lectus. Ut bibendum diam ullamcorper augue tristique lacinia. Proin ut feugiat orci.
                  Morbi finibus tempor tempus. Donec a nunc enim. Vivamus ut tempus elit, id commodo urna. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Aliquam erat volutpat."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            avatar={AVTR2}
            name="Almira"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam felis, efficitur vestibulum felis sed,
                  commodo ornare purus. Quisque sem nunc, vehicula ac lobortis quis, aliquam et ipsum. Phasellus nec felis euismod,
                  dictum leo vel, ullamcorper lectus. Ut bibendum diam ullamcorper augue tristique lacinia. Proin ut feugiat orci.
                  Morbi finibus tempor tempus. Donec a nunc enim. Vivamus ut tempus elit, id commodo urna. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Aliquam erat volutpat."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            avatar={AVTR3}
            name="Almira"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam felis, efficitur vestibulum felis sed,
                  commodo ornare purus. Quisque sem nunc, vehicula ac lobortis quis, aliquam et ipsum. Phasellus nec felis euismod,
                  dictum leo vel, ullamcorper lectus. Ut bibendum diam ullamcorper augue tristique lacinia. Proin ut feugiat orci.
                  Morbi finibus tempor tempus. Donec a nunc enim. Vivamus ut tempus elit, id commodo urna. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Aliquam erat volutpat."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            avatar={AVTR4}
            name="Almira"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam felis, efficitur vestibulum felis sed,
                  commodo ornare purus. Quisque sem nunc, vehicula ac lobortis quis, aliquam et ipsum. Phasellus nec felis euismod,
                  dictum leo vel, ullamcorper lectus. Ut bibendum diam ullamcorper augue tristique lacinia. Proin ut feugiat orci.
                  Morbi finibus tempor tempus. Donec a nunc enim. Vivamus ut tempus elit, id commodo urna. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Aliquam erat volutpat."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials