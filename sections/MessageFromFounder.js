import React from 'react'

export default function MessageFromFounder() {
  return (
    <div className='container'>
      <div className='section-container'>
        <div className='left'>
          <h1 className='title'>Message From Founder</h1>
          <p>The school situated in a serene ambience away from the madding crowd promises an overall development academic, physical & aesthetic of the students. Needless to say that the Principal plays a meaningful role in the academic life of the student, who molds and shapes the character and conduct of the students with parental love and care & brings out the best in them by providing a congenial academic atmosphere.</p>

          <p>Hari om Academy gives more emphasis on this topic in all its P.T.M to make the parents conscious. My appeal to the parents- let us extend our hands whole heartedly to bring up the children in Hari om Academy to make them best citizen of India as its a collective responsibility of all of us.</p>

          <p className='founder'>Chandar Kumar</p>
        </div>
        <div className='right'>
          <img className='image' src='/founder.png' alt='Founder' />
        </div>
      </div>
      <style jsx>{`
      .title {
        font-size: 36px;
        font-family: 'Proxima Nova Bold';
        color: #172B4D;
        padding: 20px 0;
        text-align: left;
      }
      .container {
        box-shadow: 0 2px 4px rgba(0,0,0,0.16);
        //border: 1px solid #eff2f7;
        border-radius: 6px;
        padding-left: 30px;
        background: #fff;
        max-width: 1200px;
        margin: 75px auto 30px;
      }
      .section-container {
        display: flex;
      }
      p {
        margin-top: 10px;
      }
      .image {
        border-radius: 6px;
      }
      .left {
        margin-top: 20px;
        color: #6B778C;
        line-height: 20px;
      }
      .founder {
        font-family: 'Proxima Nova Semibold';
      }
      .right {
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(26,242,127,1) 100%);
        border-radius: 6px;
      }
      `}</style>
    </div>
  )
}
