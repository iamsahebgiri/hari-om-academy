import React from 'react';

export default function Jumbotron({ title, description }) {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="title">{title}</h1>
        <p
          className="description"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
      <style jsx>
        {`
          .jumbotron {
            background: var(--brand-color);
            height: 200px;
            width: 100%;
          }
          .container {
            height: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .title {
            text-align: center;
            font-size: 36px;
            font-family: 'Proxima Nova Bold';
            color: #FFF;
          }
          .description {
            text-align: center;
            color: #fff;
            margin-top: 10px;
            opacity: 0.8;
          }
          @media only screen and (max-width: 992px)
          {
            .jumbotron {
              height: 140px;
            }
            .title {
              font-size: 28px;
              padding: 0 30px;
            }
          }
        `}
      </style>
    </div>
  );
}
