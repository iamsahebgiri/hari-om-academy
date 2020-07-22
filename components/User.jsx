import React from 'react';

export default function User(props) {
  const {
    name, designation, pic, description,
  } = props;
  return (
    <div className="container">
      <div className="avatar mx-auto">
        <img
          src={'pic' in props ? `faculties/${pic}` : 'faculties/default.png'}
          className="rounded-circle"
          alt={name}
        />
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">{name}</h5>
      <p className="designation">{designation}</p>
      <a href={`mailto:${description}?subject=Hello`} className="description">{description}</a>
      <style jsx>
        {`
        .container {
          box-shadow: 0 2px 4px rgba(0,0,0,0.12);
          border-radius: 6px;
          padding: 20px;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #172B4D;
        }
        .avatar img{
          height: 120px;
          width: 120px;
        }
        .rounded-circle {
            border-radius: 50% !important;
        }
        .designation {
          color: #6B778C;
          margin: 6px;
        }
        .description {
          text-align: center;
          color: #6B778C;
        }
        .font-weight-bold {
          font-family: "Proxima Nova Bold";
          margin-top: 20px;
        }
        
        @media only screen and (max-width: 990px){
          .container {
            border: 1px solid #EFF2F7;
            box-shadow: none;
            border-radius: 6px;
          }
        }

        `}
      </style>
    </div>
  );
}
