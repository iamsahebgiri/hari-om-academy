import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewItem from '../components/ReviewItem';
import { useState, useEffect } from 'react';



export default function Testimonials() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className='testimpnials-container'>
      <h1 className='title'>Our loving parents and students.</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={width>922? 3: 1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
      </Swiper>

      <style jsx> {`
      .title {
        Font-family: 'Proxima Nova Bold';
        font-size: 36px;
        color: #172B4D;
        text-align: center;
        padding: 40px 0;
      }
      .testimpnials-container {
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 30px;
      }
      @media only screen and (max-width: 992px) {
        .title {
          font-size: 28px;
          padding: 40px 20px;
        }
      }
      `}</style>
    </div>
  )
}
