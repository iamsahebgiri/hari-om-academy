import React from 'react';

export default function CourseItem({
  img, title, colorTop, colorBottom,
}) {
  return (
    <div className="course-item">
      <img src={`/course/${img}`} alt={title} />
      <h2 className="title">{title}</h2>

      <style jsx>
        {`
        .course-item {
          height: 160px;
          width: 160px;
          background: ${colorBottom};
          background: linear-gradient(0deg, ${colorBottom},${colorTop});
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transition: all 0.4s;
        }
        .course-item:hover {
          transform: scale(1.1);
        }
        img {
          height: 70px;
        }
        .title {
          font-size: 18px;
          font-family: 'Proxima Nova Semibold';
          color: #FFF;
          margin-top: 10px;
          text-align: center;
        }
        `}
      </style>
    </div>
  );
}
