import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
      </div>
     <div>Developed by <a href="https://iamsahebgiri.now.sh" target="_blank" rel="noopener noreferrer">Saheb Giri</a></div>
     <div> All rights reserved &copy; 2020</div>
      <style jsx>
        {`
          .footer {
            background: #172B4D;
            color: #fff;
            padding: 20px 20px;
            display: flex;
            justify-content: space-between;
            font-size: 13px;
          }
          a {
            text-decoration: none;
            color: #B3D4FF;
            margin-left: 10px;
          }
        `}
      </style>
    </div>
  )
}
