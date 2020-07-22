import React from 'react';
import FeaturedIcon from './FeaturedIcon';

export default function WhyUsItem(props) {
  const {
    src, title, icon, description, color,
  } = props;
  return (
    <div className="why-us-item-container">
      <img className="img" src={src} alt={title} />
      <div className="left-section">
        <div className="title">
          <FeaturedIcon icon={icon} color={color} height="30" width="30" />
          <h1>{title}</h1>
        </div>
        <p className="description">{description}</p>
      </div>

      <style jsx>
        {`
        .why-us-item-container {
          max-width: var(--width-desktop);
          margin: 80px auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: ${'reverse' in props ? 'row-reverse' : 'row'};
        }
        .title {
          display: flex;
          align-items: center;
        }
        .title h1 {
          font-family: 'Proxima Nova Bold';
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
        @media only screen and (max-width: 992px) {
          .why-us-item-container {
            flex-direction: column;
          }
          .left-section {
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
          }
          .title h1 {
            font-size: 22px;
            font-family: 'Proxima Nova Bold';
            color: #172B4D;
          }
          .description {
            width: 300px;
            text-align: center;
            margin-top: 12px;
            margin-left: 0px;
            line-height: 24px;
          }
          .img {
            width: 300px;
          }
        }
      `}
      </style>
    </div>
  );
}
