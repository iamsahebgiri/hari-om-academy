import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

export default function fees() {
  return (
    <div>
      <Head>
        <title>Fees Structure| Hari Om Academy</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron title="Fees Structure" description="We are transparent when it comes to money." />
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th>Courses</th>
              <th>Subjects</th>
              <th>Prices/Month</th>
            </tr>

            <tr>
              <td>Class 9 and 10 (JAC)</td>
              <td>All</td>
              <td>Rs. 500 + 50</td>
            </tr>
            <tr>
              <td>Class 9 and 10 (CBSE)</td>
              <td>All</td>
              <td>Rs. 750</td>
            </tr>
            <tr>
              <td>Class 11 (+1)</td>
              <td>Physics</td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>Class 11 (+1)</td>
              <td>Chemistry</td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>Class 11 (+1)</td>
              <td>Mathematics</td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>Class 12 (+2)</td>
              <td>Physics</td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>Class 12 (+2)</td>
              <td>Chemistry</td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>Class 12 (+2)</td>
              <td>Mathematics</td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>Computer Course</td>
              <td>Basic</td>
              <td>Rs. 2000 (One Time/Yr)</td>
            </tr>
            <tr>
              <td>Computer Course</td>
              <td>C++</td>
              <td>Rs. 2000 (One Time/Yr)</td>
            </tr>
            <tr>
              <td>Railway/Defence/SSC</td>
              <td>All</td>
              <td>Rs. 750</td>
            </tr>
            <tr>
              <td>English Special Class</td>
              <td>English Only</td>
              <td>Rs. 300</td>
            </tr>
            <tr>
              <td>I.A.</td>
              <td>All</td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>Mechanical Engineering</td>
              <td>All</td>
              <td>Rs. 2000</td>
            </tr>
            <tr>
              <td>I.Com.</td>
              <td>All</td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>JEE</td>
              <td>PCM</td>
              <td>Rs. 40000 (One Time/Yr)</td>
            </tr>
            <tr>
              <td>NEET</td>
              <td>PCB</td>
              <td>Rs. 40000 (One Time/Yr)</td>
            </tr>
            <tr>
              <td>Banking</td>
              <td>All</td>
              <td>Rs. 12000 (Full Course)</td>
            </tr>
            <tr>
              <td>S.S.C.</td>
              <td>All</td>
              <td>Rs. 10000 (Full Course)</td>
            </tr>
            <tr>
              <td>Railway</td>
              <td>All</td>
              <td>Rs. 8000 (Full Course)</td>
            </tr>
            <tr>
              <td>N.D.A.</td>
              <td>All</td>
              <td>Rs. 8000 (Full Course)</td>
            </tr>
            <tr>
              <td>I.A.S.</td>
              <td>All</td>
              <td>Rs. 1000</td>
            </tr>
            <tr>
              <td>Polytechnic</td>
              <td>All</td>
              <td>Rs. 2000</td>
            </tr>
            <tr>
              <td>B.Sc.</td>
              <td>Mathematics</td>
              <td>Rs. 3000 / Per Semester</td>
            </tr>
            <tr>
              <td>B.Sc.</td>
              <td>Physics</td>
              <td>Rs. 3000 / Per Semester</td>
            </tr>
            <tr>
              <td>B.Sc.</td>
              <td>Chemistry</td>
              <td>Rs. 3000 / Per Semester</td>
            </tr>
            <tr>
              <td>B.Com.</td>
              <td>All</td>
              <td>Rs. 2000 / Per Semester</td>
            </tr>
            <tr>
              <td>B.A.</td>
              <td>All</td>
              <td>Rs. 1500 / Per Semester</td>
            </tr>
            <tr>
              <td>Class 1 to 4</td>
              <td>All</td>
              <td>Rs. 250</td>
            </tr>
            <tr>
              <td>Class 5 and 6</td>
              <td>All</td>
              <td>Rs. 300</td>
            </tr>
            <tr>
              <td>Class 7 and 8</td>
              <td>All</td>
              <td>Rs. 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
      <style jsx>
        {`
        .container {
          background: #FFF;
          max-width: 1200px;
          margin: 30px auto;
          padding: 10px;
          overflow-x:auto;
          color: #172B4D;
          border-radius:6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.12);
        }
        img {
          max-height: 500px;
          border-radius: 10px;
        }
        .item {
          height: 500px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th { font-family:'Proxima NOva Semibold';}
        tr:hover {background-color: #EBECF0;}
        th, td {
          text-align: left;
          padding: 8px;
        }

        tr:nth-child(even) {background-color: #F4F5F7;}
        @media only screen and (max-width: 992px) {
          .container {
            margin: 10px;
            border: 1px solid #EFF2F7;
            box-shadow: none;
            border-radius: 6px;
          }
        }
        `}
      </style>
      <style global jsx>
        {`
        
        `}
      </style>
    </div>
  );
}
