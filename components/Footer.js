import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="container">
      <div className='footer'>
        <div>
          <img src="/logo.png" alt="Hari om academy" />
          <p>Hari Om Academy, family have passion <br /> to serve student community by way of <br /> providing good source of study and <br />quality guidance.</p>
          <p>Made with 🌹 by Meetwit</p>
        </div>
        <div>
          <h1>Links</h1>
          <ul>
            <li>
              <Link href='/courses'>
                <a>Courses</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Follow Us</h1>
          <ul>
            <li>
              <a href="http://instagram.com/hariomacadmey" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="http://facebook.com/hariomacademy" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="http://youtube.com/hariomacadmey" target="_blank" rel="noopener noreferrer">Youtube</a>
            </li>
            <li>
              <a href="http://youtube.com/hariomacadmey" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Contact</h1>
          <p>+91 8210026457</p>
          <p>Chhota Govindpur,<br />
          Near Shri Ram Mandir, <br />
          Jamshedpur, <br />
          Jharkhand 831015
        </p>
        </div>
      </div>
      <style jsx>
          {`
          .container {
            background: #fff;
          }
          .footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 30px 0;
            max-width: 1200px;
            margin: 0 auto;
          }
          p {
            margin-top: 10px;
          }
          h1 {
            font-family: 'Proxima Nova Bold';
            color: #172B4D;
          }
          ul li {
            margin-top: 10px;
          }
          ul li a {
            text-decoration: none;
            color: #172B4D;
          }
          ul li a:hover {
            text-decoration: underline;
            color: #4C9AFF;
          }
        `}
        </style>
    </div>
  )
}
