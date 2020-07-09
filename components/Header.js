import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='header'>
      <div className='left-nav-container'>
        <Link href='/'>
          <a className='logo'>Hari Om Academy</a>
        </Link>
        <ul className='left-nav'>
          <li>
            <Link href='/study'>
              <a>Study Material</a>
            </Link>
          </li>
          <li>
            <Link href='/courses'>
              <a>Courses</a>
            </Link>
          </li>
          <li>
            <Link href='/gallery'>
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
      <ul className='right-nav'>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          padding-top: 40px;
        }
        .left-nav li, .right-nav li{
          display: inline-block;
        }
        .left-nav li {
          margin-right: 10px;
        }
        .right-nav li {
          margin-left: 20px;
        }
        .left-nav li a, .right-nav li a {
          text-decoration: none;
          text-transform: uppercase;
          font-family: 'Proxima Nova Semibold';
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          padding: 6px 10px;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .left-nav li a:hover, .right-nav li a:hover{
          color: rgba(255,255,255,1);
          background: rgba(0,0,0,0.1);
        }
        .logo {
          text-decoration: none;
          text-transform: uppercase;
          font-family: 'Proxima Nova Bold';
          color: #fff;
          // background: #fff;
          // color: #8777D9;
          // padding: 10px 16px;
          border-radius: 6px;
          margin-right: 30px;
        }
        .left-nav-container {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
