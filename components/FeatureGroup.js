import React from 'react'
import FeaturedIcon from './FeaturedIcon'

export default function Feature({icon, color, title, description}) {
  return (
    <div>
      <FeaturedIcon color={color} icon={icon} />
      <h2>{title}</h2>
      <p>
       {description}
      </p>

      <style jsx>{`
        div {
          width: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 10px 50px 10px;
        }
        p {
          text-align: center;
          color: #6B778C;
          line-height: 20px;
        }
        h2 {
          font-size: 22px;
          font-family: 'Proxima Nova Bold';
          margin: 10px 0;
          color: #172B4D;
          text-align: center;
        }
        @media only screen and (max-width: 992px) { {
          div {
            padding: 10px 10px 30px 10px;
          }
        }
      `}</style>
    </div>
  )
}
