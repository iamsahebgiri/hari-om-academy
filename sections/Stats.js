import React from 'react'

export default function Stats() {
  return (
    <div className='stats-container'>
      {/* <h1 className='title'>Our Growth and Statistic</h1> */}
      <div className='stats-content'>
        <div className='stats-item'>
          <h1>4</h1>
          <p>Branches</p>
        </div>
        <div className='stats-item'>
          <h1>4000+</h1>
          <p>Happy Students</p>
        </div>
        <div className='stats-item'>
          <h1>23</h1>
          <p>Faculties</p>
        </div>
        <div className='stats-item'>
          <h1>30+</h1>
          <p>Courses</p>
        </div>
      </div>
      <style jsx >
        {`
          .stats-container {
            padding: 50px 20px;
          }
          .title, .stats-item h1 {
            font-family: 'Proxima Nova Bold';
            font-size: 36px;
            color: #172B4D;
          }
          .title {
            margin: 30px 0 50px 0;
            text-align:center;
          }
          .stats-content {
            display: flex;
            justify-content: space-around;
            text-align: center;
          }
          .stats-item h1 {
            font-family: 'Circular';
          }
          .stats-item p {
            color: #6B778C;
          }

        `}
      </style>
    </div>
  )
}
