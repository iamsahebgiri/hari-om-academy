import React from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function gallery() {
  return (
    <div>
      <Header />
      <Jumbotron title='Our Gallery' description='Capturing every happy moments.' />
      <div className="container">
        <Swiper
          spaceBetween={20}
          navigation
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="/gallery/1.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/2.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/3.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/4.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/5.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/6.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/7.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/8.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/9.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/10.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery/11.jpg" alt="Hari om Academy"/>
          </SwiperSlide>
          
        </Swiper>
      </div>

      <Footer />
      <style jsx>
        {`
        .container {
          margin: 0 auto;
          padding: 10px;
        }
        img {
          max-height: 500px;
          border-radius: 10px;
        }
        .item {
          height: 500px;
        }
        @media only screen and (max-width: 992px) {
            img {
            max-height: 300px;
            border-radius: 6px;
          }
        }
        `}
      </style>
      <style global jsx>
        {`
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-prev::after, .swiper-button-next::after {
          font-size: 20px;
        }
        `}
      </style>
    </div>
  )
}
