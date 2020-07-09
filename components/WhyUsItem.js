import React from 'react'
import FeaturedIcon from './FeaturedIcon'

export default function WhyUsItem(props) {
  return (
    <div className='why-us-item-container'>
      <div className='left-section'>
        <div className='title'>
          <FeaturedIcon icon={props.icon} color={props.color} height='30' width='30' />
          <h1>{props.title}</h1>
        </div>
        <p className='description'>{props.description}</p>
      </div>
      <img className='img' src={props.src} alt={props.title} />
      <style jsx>{`
        .why-us-item-container {
          max-width: var(--width-desktop);
          margin: 80px auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: ${ 'reverse' in props ?  'row-reverse': 'row' };
        }
        .title {
          display: flex;
        }
        .title h1 {
          font-weight: bold;
          font-size: 36px;
          color: #172B4D;
          margin-left: 10px;
        }
        .description {
          width: 400px;
          margin-left: 40px;
          margin-top: 10px;
          color: #6B778C;
          line-height: 20px;
        }
        .img {
          width: 400px;
        }
      `}</style>
    </div>
  )
}
