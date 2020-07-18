import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {

  const router = useRouter();
  const modal = React.createRef();
  function toggleModal(e) {
    if (modal.current.style.display === 'block') {
      modal.current.style.display = 'none';
    }
    else {
      modal.current.style.display = 'block';
    }

  }
  return (
    <div className="container">
      <div className='header'>
        <div className='mob-navbar'>
          <div onClick={toggleModal.bind(this)}>
            <span className='iconify' data-icon='ion-menu' width='24px'></span>
          </div>
          <h1 className='mob-title'>Hari Om Academy</h1>
          <div></div>
        </div>
        <div id='mob-nav-modal' className='mob-nav' ref={modal}>
          <div className='modal-content'>
            <div className='modal-topbar' onClick={toggleModal.bind(this)}>
              <span className='iconify' data-icon='ion-close' width='18px'></span>
              <h1>Close</h1>
            </div>
            <ul>
              <li >
                <Link href='/' >
                  <a className={router.pathname == '/' ? 'active' : ''}>
                    <span className='iconify' data-icon='ion-planet' width='18px'></span>
                    Home
                </a>
                </Link>
              </li>
              <li>
                <Link href='/courses'>
                  <a className={router.pathname == '/courses' ? 'active' : ''}>
                    <span className='iconify' data-icon='ion-construct' width='18px'></span>
                  Courses
                </a>
                </Link>
              </li>
              <li>
                <Link href='/gallery'>
                  <a className={router.pathname == '/gallery' ? 'active' : ''}>
                    <span className='iconify' data-icon='ion-images' width='18px'></span>
                  Gallery</a>
                </Link>
              </li>
              <li>
                <Link href='/fees'>
                  <a className={router.pathname == '/fees' ? 'active' : ''}>
                    <span className='iconify' data-icon='ion-card' width='18px'></span>
                  Fees</a>
                </Link>
              </li>
              <li>
                <Link href='/faculties'>
                  <a className={router.pathname == '/faculties' ? 'active' : ''}>
                    <span className='iconify' data-icon='ion-people' width='18px'></span>
                  Faculties</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a className={router.pathname == '/about' ? 'active' : ''}>
                    <span className='iconify' data-icon='ion-school' width='18px'></span>
                About</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a className={router.pathname == '/contact' ? 'active' : ''}>
                    <span className='iconify' data-icon='ion-call' width='18px'></span>
                Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='left-nav-container'>
          <Link href='/'>
            <a className='logo'>Hari Om Academy</a>
          </Link>
          <ul className='left-nav'>
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
              <Link href='/fees'>
                <a>Fee Structure</a>
              </Link>
            </li>
            <li>
              <Link href='/faculties'>
                <a>Faculties</a>
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
      </div>

      <style jsx>{`
        .container {
          background: var(--brand-color);
        }
        .header {
          display: flex;
          justify-content: space-between;
          padding: 40px 0;
          max-width: var(--width-desktop);
          margin: 0 auto;
        }
        .mob-navbar, .mob-nav {
          display: none;
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
        @media only screen and (max-width: 992px) {
          .left-nav-container, .right-nav{
            display: none;
          }
          .header {
            padding: 0;
          }
          .mob-navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #FFF;
            width: 100%;
            padding: 15px 10px;
          }
          .mob-title {
            font-family: 'Proxima Nova Bold';
            color: #172B4D;
            text-transform: uppercase;
            font-size: 21px;
          }
          .block {
            display: block;
          }
          .mob-nav {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 100; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(9,30,66); /* Fallback  */
            background-color: rgba(9,30,66,.42); /* color w/ opacity */
          }

          /* Modal Content */
          .modal-content {
            position: relative;
            background-color: #FFF;
            height: 100%;
            width: 70%;
            animation-name: slide;
            animation-duration: 0.4s;
          }

          @keyframes slide {
            from {
              left: -70%;
              opacity: 0;
            }
            to {
              left: 0;
              opacity: 1;
            }
          }
          .modal-content ul li {
            padding: 0 8px;
          }
          .modal-content a {
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 8px;
            border-radius: 3px;
            color: #42526e;
            font-family: 'Proxima Nova Semibold';
          }
          .modal-content a:hover {
            background: #EEF5FD;
          }
          .modal-topbar {
            display: flex;
            align-items: center;
            padding: 8px;
          }
          .modal-topbar .iconify {
            padding: 8px;
          }
          .modal-content a .iconify {
            margin-right: 8px;
            color: #42526e;
          }
          .active {
            background: #EEF5FD;
            color: #007aff !important;
          }
          .active .iconify {
            color: #007aff !important;
          }
        }

      `}</style>
    </div>

  )
}
