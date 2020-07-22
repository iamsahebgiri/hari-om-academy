import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

export default function gallery() {
  return (
    <div>
      <Head>
        <title>Our Gallery | Hari Om Academy</title>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron title="Our Gallery" description="Capturing every happy moments." />
      <div className="container">

        <img src="/gallery/1.jpg" alt="Hari om Academy" />

        <img src="/gallery/2.jpg" alt="Hari om Academy" />

        <img src="/gallery/3.jpg" alt="Hari om Academy" />

        <img src="/gallery/4.jpg" alt="Hari om Academy" />

        <img src="/gallery/5.jpg" alt="Hari om Academy" />

        <img src="/gallery/6.jpg" alt="Hari om Academy" />

        <img src="/gallery/7.jpg" alt="Hari om Academy" />

        <img src="/gallery/8.jpg" alt="Hari om Academy" />

        <img src="/gallery/9.jpg" alt="Hari om Academy" />

        <img src="/gallery/10.jpg" alt="Hari om Academy" />

        <img src="/gallery/11.jpg" alt="Hari om Academy" />

        <img src="/gallery/12.jpg" alt="Hari om Academy" />

        <img src="/gallery/13.jpg" alt="Hari om Academy" />
      </div>

      <Footer />
      <style jsx>
        {`
        .container {
          max-width: 1200px;
          margin: 10px auto;
          padding: 10px;
          display: grid;
          grid-template-columns: 580px 580px;
          grid-gap: 20px;
        }
        img {
          width: 580px;
          border-radius: 10px;
        }
        
        @media only screen and (max-width: 992px) {
          .container{
            grid-template-columns: 340px;
            grid-gap: 10px;
          }
          img {
            width: 340px;
            border-radius: 6px;
          }
        }
        `}
      </style>
    </div>
  );
}
