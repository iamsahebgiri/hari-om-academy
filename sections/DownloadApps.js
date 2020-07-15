import React from 'react'
import PlayStore from '../components/PlayStore'
import AppStore from '../components/AppStore'

export default function DownloadApps() {
  return (
    <div className='download-apps'>
      <div className='content-container'>
        <div className='section'>
          <h1 className='title'>Download our app now</h1>
          <p className='description'>Study Material, latest notifications,<br /> reminder and many more.</p>
          <PlayStore />
        </div>
        <img src='/phones.png' alt='download apps' />

      </div>
      <style jsx>
        {`
        .download-apps {
          background: #fff;
          padding: 20px 0 0 0;
        }
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          font-family: 'Proxima Nova Bold';
          font-size: 36px;
          color: #172B4D;
        }
        
        .description {
          margin: 10px 0 20px 0;
          line-height: 20px;
          color: #6B778C;
        }
        img {
          width: 300px;
        }
        @media only screen and (max-width: 992px) {
          .section {
            display:flex;
            flex-direction: column;
            align-items: center;
          }
          img {
            display: none;
          }
          .title {
            font-size: 28px;
            text-align: center;
          }
          .content-container {
            padding: 20px;
          }
          .description {
            text-align: center;
          }
        }
        `}
      </style>
    </div>
  )
}
