import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import User from '../components/User';

export default function faculties() {
  return (
    <div>
      <Head>
        <title>Our faculties | Hari Om Academy</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron title="Our Ignited Minds" description="Best and Young faculties." />
      <div className="container">
        <User name="Chandan Kumar" designation="CEO & Founder" description="chandankumar@hariomacademy.com" pic="ck.jpg" />
        <User name="Shailendra Kumar" designation="M.Sc. & B.Ed." pic="shailendra.jpg" />
        {/* <User name="Dinesh Sharma" designation="MBBS" /> */}
        <User name="Manish Kumar Singh" designation="MBA" pic="manish.jpg" />

        <User name="Aarti Kumari" designation="M.Sc." pic="ak.jpg" description="aartikumari@hariomacademy.com" />
        <User name="Anupama Kumari" designation="M.Sc." pic="anupama.jpg" description="anupamakumari@hariomacademy.com" />
        <User name="Krishna Singh" designation="B.Tech" pic="krishna_singh.jpg" description="krishnasingh@hariomacademy.com" />
        {/* <User name="Om Sharma" designation="M.Sc." /> */}
        <User name="Sashi Bhusan Sharma" designation="M.Com" pic="s_bhusan.jpg" />
        <User name="Sonal Kumari" designation="M.Com" pic="sonal_kumari.jpg" />
        <User name="Rani Kumari" designation="M.Com" pic="rani_kumari.jpg" />
        <User name="Roshan Kumar" designation="BCA" pic="rk.jpg" />
        <User name="Shalu Kumari" designation="BCA" pic="shalu.jpg" />

        <User name="Shri Tiu" designation="Assistant Teacher" pic="shri.jpg" />
        <User name="Mohit Nishant" designation="Assistant Teacher" pic="nishant.jpg" />
        <User name="Sunil Kumar" designation="Assistant Teacher" pic="sunil_kumar.jpg" />
        <User name="Nidhi Kumari" designation="Assistant Teacher" pic="nidhi_kumari.jpg" />
        <User name="Nidhi Kumari" designation="Assistant Teacher" pic="nidhi_kumari_diff.jpg" />
        <User name="Shilpy kumari" designation="Assistant Teacher" pic="shilpy.jpg" />
        <User name="Archana kumari" designation="Assistant Teacher" pic="archana.jpg" />
        <User name="Soni kumari" designation="Assistant Teacher" pic="soni.jpg" />

        <User name="Rahul Mahato" designation="Computer Trainer" pic="rahul.jpg" />
      </div>
      <Footer />
      <style jsx>
        {`
          .container  {
            max-width: 1200px;
            margin: 30px auto;
            display: grid;
            grid-template-columns: repeat(3, 300px);
            grid-gap: 30px;
            justify-content: center;
          }
          @media only screen and (max-width: 992px) { 
            .container {
              grid-template-columns: 340px;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
}
