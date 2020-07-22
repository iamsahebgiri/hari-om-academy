import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

export default function fees() {
  return (
    <div>
      <Head>
        <title>Test Series | Hari Om Academy</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron
        title="Offline Test Series"
        description="Learn, Test, Sleep, Repeat."
      />
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th>Courses</th>
              <th>Prices</th>
            </tr>

            <tr>
              <td>Class 10 CBSE</td>
              <td>Rs. 150/Month or Rs. 1500/Year</td>
            </tr>
            <tr>
              <td>Class 10 JAC</td>
              <td>Rs. 100/Month or Rs. 1000/Year</td>
            </tr>
            <tr>
              <td>Inter. CBSE</td>
              <td>Rs. 250/Month or Rs. 2500/Year</td>
            </tr>
            <tr>
              <td>Inter. JAC</td>
              <td>Rs. 200/Month or Rs. 2000/Year</td>
            </tr>
            <tr>
              <td>I.Com.</td>
              <td>Rs. 200/Month or Rs. 2000/Year</td>
            </tr>
            <tr>
              <td>I.A.</td>
              <td>Rs. 100/Month or Rs. 1000/Year</td>
            </tr>
            <tr>
              <td>S.S.C.</td>
              <td>Rs. 100/Month or Rs. 1000/Year</td>
            </tr>
            <tr>
              <td>Railways</td>
              <td>Rs. 100/Month or Rs. 1000/Year</td>
            </tr>
            <tr>
              <td>Bank</td>
              <td>Rs. 100/Month or Rs. 1000/Year</td>
            </tr>
            <tr>
              <td>NDA</td>
              <td>Rs. 200/Month or Rs. 2000/Year</td>
            </tr>
            <tr>
              <td>CDS</td>
              <td>Rs. 200/Month or Rs. 2000/Year</td>
            </tr>
          </tbody>
        </table>

        <div className="note">
          <b>Note: </b>
          <ol>
            <li>All Subjects are included in this package.</li>
            <li>
              Test occurs once in a week and daily prior to annual examination
              for whole month.
            </li>
          </ol>
        </div>
      </div>

      <Footer />
      <style jsx>
        {`
          .container {
            background: #fff;
            max-width: 1200px;
            margin: 30px auto;
            padding: 10px;
            overflow-x: auto;
            color: #172b4d;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
          }
          img {
            max-height: 500px;
            border-radius: 10px;
          }
          .note {
            margin: 20px 0;
          }
          b {
            font-family: "Proxima Nova Bold";
          }
          .item {
            height: 500px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th {
            font-family: "Proxima Nova Semibold";
          }
          tr:hover {
            background-color: #ebecf0;
          }
          th,
          td {
            text-align: left;
            padding: 8px;
          }

          tr:nth-child(even) {
            background-color: #f4f5f7;
          }
          @media only screen and (max-width: 992px) {
            .container {
              margin: 10px;
              border: 1px solid #eff2f7;
              box-shadow: none;
              border-radius: 6px;
            }
          }
        `}
      </style>
    </div>
  );
}
