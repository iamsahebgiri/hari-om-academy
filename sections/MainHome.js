import React from 'react'
import Link from 'next/link'

export default function MainHome() {
  return (
    <div className='main-home-container'>
      <div className='left-section'>
        <h1>First digital institute <br /> of Jamshedpur</h1>
        <p className='tagline'>Where your dream comes true.</p>
        <img className='underline' src='/underline.svg' alt='underline' />
        <button>Get Started</button>
        <div className="popular-courses-container">
          <p className='popular-courses'>Popular courses:</p>
          <ul className='popular-courses-ul'>
            <li>
              <Link href='/courses'>
                <a>UPSC CSE</a>
              </Link>
            </li>
            <li>
              <Link href='/courses'>
                <a>Banks</a>
              </Link>
            </li>
            <li>
              <Link href='/courses'>
                <a>IIT JEE</a>
              </Link>
            </li>
            <li>
              <Link href='/courses'>
                <a>NEET</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='right-section'>
        <img width='450' src='/girl.png' alt='girl' />
      </div>
      <style jsx>{`
        h1 {
          font-size: 48px;
          line-height: 62px;
          font-family: 'Circular';
        }
        .tagline {
          font-size: 24px;
          margin-top: 10px;
          opacity: 0.8;
        }
        h1, p {
          color: #fff;
        }
        .underline {
          position: absolute;
          margin-top: -104px;
        }
        .main-home-container {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 100px;
          background-color: var(--brand-color);
          padding-bottom: 100px;
        }
        .popular-courses-container {
          display: flex;
          align-items: center;
          margin-top: 30px;
        }
        .popular-courses-ul li{
          display: inline-block;
          margin-left: 20px;
        }
        .popular-courses-ul li a {
          text-decoration: none;
          color: #fff;
          opacity: 0.6;
          text-transform: uppercase;
          font-family: 'Proxima Nova Semibold';
        }
        .popular-courses-ul li a:hover {
          opacity: 1;
        }
        button{
         display: inline-block;
         padding: 10px 20px;
         margin:0 0.1em 0.1em 0;
         border: none;
         border-radius:6px;
         box-sizing: border-box;
         color:#FFF;
          font-size: 16px;
         text-align:center;
         transition: all 0.2s;
          outline: none;
          background: #3ECF8E;
          text-transform: uppercase;
          font-family: 'Proxima Nova Semibold';
          margin-top: 80px;
        }
        button:hover{
          cursor: pointer;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}
