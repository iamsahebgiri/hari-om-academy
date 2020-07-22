import React from 'react';

export default function PaidCourseSection() {
  return (
    <div className="white-box">
      <h1 className="title">Paid Courses</h1>
      <img
        className="work-in-progress"
        src="/work_in_progress.svg"
        width="400px"
        alt="work_in_progress"
      />
      <p className="coming-soon">Coming Soon</p>
      <style jsx>
        {`
        .white-box {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title {
          margin: 20px auto 0;
        }
        .work-in-progress {
          margin: 40px auto;
        }
        .coming-soon {
          margin: 0 auto 40px;
        }
        @media only screen and (max-width: 992px) {
          .work-in-progress {
            width: 300px;
          }
        }
        `}
      </style>
    </div>
  );
}
