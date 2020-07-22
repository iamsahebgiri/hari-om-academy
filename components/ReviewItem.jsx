import React from 'react';

export default function ReviewItem({
  text, name, course, path,
}) {
  return (
    <div className="container">
      <div className="review-item-container">
        <div>
          <p
            className="text"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </div>
        <div className="user-info-container">
          <div className="circle">
            <img src={`/profile/${path}`} alt={name} />
          </div>
          <div>
            <p>{name}</p>
            <p>{course}</p>
          </div>
        </div>

      </div>
      <style jsx>
        {`
        .container {
          padding: 20px 0;
        }
        .review-item-container {
          height: 200px;
          background: #FFF;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.16);
          margin: 10px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .circle img {
          height: 50px;
          width: 50px;
          border-radius: 25px;
          margin-right: 10px;
        }
        .user-info-container {
          display: flex;
          align-items: center;
        }
        .text,p {
          color: #6B778C;
          line-height: 21px;
        }

        @media only screen and (max-width: 992px) {
          .review-item-container {
            box-shadow: none;
            border: 1px solid #eff2f7;
          }
        }
      `}
      </style>
    </div>

  );
}
