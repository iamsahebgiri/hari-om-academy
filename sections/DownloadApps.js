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
          <div className="store-icons">
            <PlayStore />
            <AppStore />
          </div>
        </div>
        <img src="/phones.png" alt="download apps" />

      </div>
      <style jsx >
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
        .store-icons {
          width: 340px;
          display: flex;
          justify-content: space-between;
        }
        .store-icons div {
          margin-right: 10px;
        }
        .description {
          margin: 10px 0 20px 0;
          line-height: 20px;
          color: #6B778C;
        }
        img {
          width: 300px;
        }
        `}
      </style>
    </div>
  )
}
