import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="container">
      <div className='footer'>
        <div>
          <img src="/logo.png" alt="Hari om academy" />
          <p>Hari Om Academy, as a family have <br />passion  to serve student community <br />by way of  providing good source of <br /> study and quality guidance.</p>
          <p>Developed by Meetwit</p>
        </div>
        <div className='links'>
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
        <div className='links'>
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
          img {
            width: 60px;
          }
          .container {
            background: #42526e;
            color: #ccc;
          }
          .footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 30px 0 100px;
            max-width: 1200px;
            margin: 0 auto;
          }
          p {
            margin-top: 10px;
          }
          h1 {
            font-family: 'Proxima Nova Bold';
            color: #FFF;
          }
          ul li {
            margin-top: 10px;
          }
          ul li a {
            text-decoration: none;
            color: #FFF;
            opacity: 0.7;
          }
          ul li a:hover {
            text-decoration: underline;
            color: #4C9AFF;
          }
          @media only screen and (max-width: 992px) { 
            .footer {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              grid-gap: 1.3rem;
              text-align: center;
            }
            .links{
              display: none;
              justify-content: space-around;
            }
          }
        `}
        </style>
    </div>
  )
}
