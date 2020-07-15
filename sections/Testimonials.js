import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewItem from '../components/ReviewItem';
import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className='testimpnials-container'>
      <h1 className='title'>Our loving parents and students.</h1>
      <Swiper
        spaceBetween={40}
        pagination={{ clickable: true, dynamicBullets: true }}
        slidesPerView={width > 922 ? 3 : 1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ReviewItem text='I have been reading here in Hari Om Acadey for last few months. The vibe and culture here is incredible. Teachers are really supportive and clears our doubt anytime. <br /><br />
          If you want some institute who cares for you, Hari Om Academy is the way to go.' name='Richa Kumari' course='Class 12' path='1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem text='Digital Class of Hari Om Academy helps me understanding the concept so crystall clear that it stays forever. I can easily write in exam papers with ease. <br /> <br /> As far as I am concern, Hari Om Academy is one of the finest coaching institute in Jamshedpur.' name='Pinky Rathore' course='Class 10' path='2.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem text='I was looking for a coaching which focus on all round development of student, who will take intense care of student in studies and above all they must help in excelling studies. Then I got to know about Hari Om academy through a friend of mine. <br />And I have never regreted choosing Hari Om academy after that.' name='Jennifer Lawrence' course='Class 9' path='3.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem text='There are many institute in India, but not everyone of them provide quality education. HOA is specilised in holistic development of child.<br /> My child reads here for a year in class 10 and get good marks in every subjects. I am really proud of my child and HOA as well for their hard work.' name='Vijay Sharma' course='Parent' path='2.jpg'/>
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
        padding-bottom: 80px;
      }
      .swiper-container {
        padding: 20px !important;
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
