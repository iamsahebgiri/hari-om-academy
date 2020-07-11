import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewItem from '../components/ReviewItem';

export default function Testimonials() {

  return (
    <div className='testimpnials-container'>
      <h1 className='title'>Our Parents and Students Loves us!</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
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
      
      `}</style>
    </div>
  )
}
