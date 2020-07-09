import React from 'react'

export default function ReviewItem() {
  return (
    <div className='review-item-container'>
      <div>
        <div className="bar long"></div>
        <div className="bar medium"></div>
        <div className="bar short"></div>
      </div>
      <div className='user-info-container'>
        <div className="circle"></div>
        <div>
          <div className="bar medium"></div>
          <div className="bar short"></div>
        </div>
      </div>
      <style jsx>{`
        .review-item-container {
          height: 200px;
          background: #FFF;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.16);
          margin: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .bar {
          height: 16px;
          border-radius: 8px;
          background: #F4F5F7;
          margin-bottom: 10px;
        }
        .long {
          width: 200px;
        }
        .medium {
          width: 150px;
        }
        .short {
          width: 100px;
        }
        .circle {
          height: 50px;
          width: 50px;
          border-radius: 25px;
          background: #F4F5F7;
          margin-right: 10px;
        }
        .user-info-container {
          display: flex;
        }
      `}</style>
    </div>
  )
}
