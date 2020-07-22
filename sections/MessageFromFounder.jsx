import React from 'react';

export default function MessageFromFounder() {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="section-container">
          <div className="left">
            <h1 className="title">Message from founder</h1>
            <p>
              Our Institute emphasize to give new embodiment in the field of education by
              perseverance, strong mindedness to spark the whole world. Our mission to refine the
              way of learning offers child centric-education that goes beyond the text books to open
              the window of the mind so that each child develops holistically.
            </p>

            <p>
              We provide a wide ranging facilities by professionals to dynamic,
              creative learners to continue their cognitive and physical development.
            </p>
            <p>
              Also we furnish a better guidance for self-improvement of student for
              building up their future.
            </p>

            <p className="founder">Chandan Kumar</p>
          </div>
          <div className="right">
            <img className="image" src="/founder.png" alt="Founder" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
      .title {
        font-size: 36px;
        font-family: 'Proxima Nova Bold';
        color: #172B4D;
        padding: 20px 0;
        text-align: left;
      }
      .container {
        box-shadow: 0 2px 4px rgba(0,0,0,0.16);
        border-radius: 6px;
        padding-left: 30px;
        background: #fff;
        max-width: 1200px;
        margin: 30px auto 30px;
      }
      .section-container {
        display: flex;
      }
      p {
        margin-top: 10px;
      }
      .image {
        border-radius: 6px 0;
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
      @media only screen and (max-width: 992px) {
        .title  {
          font-size: 28px;
          text-align: center;
        }
        .section-container {
          flex-direction: column;
        }
        .image {
          width: 100%;
          border-radius: 6px;
        }
        .container {
          box-shadow: none;
          border-radius: 6px;
          padding: 0;
          border: 1px solid #eff2f7;
        }
        .outer-container {
          padding: 10px;
        }
        .right {
          background: rgb(255,255,255);
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(26,242,127,1) 100%);
        }
        .left {
          padding: 20px;
        }
      }
      `}
      </style>
    </div>
  );
}
