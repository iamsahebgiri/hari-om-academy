import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const modal = React.createRef();
  function toggleModal() {
    if (modal.current.style.display === 'block') {
      modal.current.style.display = 'none';
    } else {
      modal.current.style.display = 'block';
    }
  }
  return (
    <div className="container">
      <div className="header">
        <div className="mob-navbar">
          <Link href="/">
            <a className="mob-link" href="/">
              <h1 className="mob-title">Hari Om Academy</h1>
            </a>
          </Link>
          <div
            className="mob-menu"
            onClick={toggleModal.bind(this)}
            onKeyPress={toggleModal.bind(this)}
            role="button"
            tabIndex="0"
          >
            <span className="iconify" style={{ color: 'white' }} data-icon="ion-menu" width="24px" />
          </div>
        </div>
        <div id="mob-nav-modal" className="mob-nav" ref={modal}>
          <div className="modal-content">
            <div
              className="modal-topbar"
              onClick={toggleModal.bind(this)}
              onKeyPress={toggleModal.bind(this)}
              role="button"
              tabIndex="0"
            >
              <span className="iconify" data-icon="ri:close-fill" data-inline="false" width="24px" />
            </div>
            <ul>
              <li>
                <Link href="/">
                  <a className={router.pathname === '/' ? 'active' : ''} href="/">
                    <span className="iconify" data-icon="ri:home-fill" data-inline="false" width="24px" />
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a className={router.pathname === '/courses' ? 'active' : ''} href="/courses">
                    <span className="iconify" data-icon="ri:layout-2-fill" data-inline="false" width="24px" />
                    Courses
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className={router.pathname === '/gallery' ? 'active' : ''} href="/gallery">
                    <span className="iconify" data-icon="ri:gallery-fill" data-inline="false" width="24px" />
                    Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/fees">
                  <a className={router.pathname === '/fees' ? 'active' : ''} href="/fees">
                    <span className="iconify" data-icon="ri:money-dollar-circle-fill" data-inline="false" width="24px" />
                    Fees
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/testseries">
                  <a className={router.pathname === '/testseries' ? 'active' : ''} href="/testseries">
                    <span className="iconify" data-icon="ri:bar-chart-box-fill" data-inline="false" width="24px" />
                    Test Series
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faculties">
                  <a className={router.pathname === '/faculties' ? 'active' : ''} href="/faculties">
                    <span className="iconify" data-icon="ri:team-fill" data-inline="false" width="24px" />
                    Faculties
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={router.pathname === '/contact' ? 'active' : ''} href="/contact">
                    <span className="iconify" data-icon="ri:mail-fill" data-inline="false" width="24px" />
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className={router.pathname === '/about' ? 'active' : ''} href="/about">
                    <span className="iconify" data-icon="ri:information-fill" data-inline="false" width="24px" />
                    About
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="left-nav-container">
          <Link href="/">
            <a className="logo" href="/">Hari Om Academy</a>
          </Link>
          <ul className="left-nav">
            <li>
              <Link href="/courses">
                <a href="/courses">Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a href="/gallery">Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="/testseries">
                <a href="/testseries">Test Series</a>
              </Link>
            </li>
            <li>
              <Link href="/fees">
                <a href="/fees">Fee Structure</a>
              </Link>
            </li>
            <li>
              <Link href="/faculties">
                <a href="/faculties">Faculties</a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="right-nav">
          <li>
            <Link href="/contact">
              <a href="/contact">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a href="/about">About</a>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
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
          .mob-menu {
            padding: 6px 8px;
            background: rgba(255,255,255,0.2);
            border-radius: 8px;
          }
          .mob-navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--brand-color);
            width: 100%;
            padding: 15px 10px;
          }
          .mob-navbar .iconify {
            color: #172B4D;
          }
          .mob-link {
            text-decoration: none;
          }
          .mob-title {
            font-family: 'Proxima Nova Bold';
            //color: #172B4D;
            text-transform: uppercase;
            font-size: 16px;
            background: #fff;
            color: var(--brand-color);
            border-radius: 4px;
            padding: 10px 16px;
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
            justify-content: flex-end;
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

      `}
      </style>
    </div>

  );
}
