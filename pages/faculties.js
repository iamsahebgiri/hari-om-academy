import React from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import User from '../components/User'
import Head from 'next/head'

export default function faculties() {
  return (
    <div>
      <Head>
        <title>Our faculties | Hari Om Academy</title>
        <script src='https://code.iconify.design/1/1.0.7/iconify.min.js'></script>
      </Head>
      <Header />
      <Jumbotron title='Our Ignited Minds' description='Best and Young faculties.' />
      <div className="container">
        <User name="Chandan Kumar" designation="CEO & Founder" pic="ck.jpg" />
        <User name="Shailendra Kumar" designation="M.Sc. & B.Ed." pic="shailendra.jpg"/>
        <User name="Dinesh Sharma" designation="MBBS" />
        <User name="Manish Kumar Singh" designation="MBA" pic="manish.jpg"/>

        <User name="Aarti Kumari" designation="M.Sc." pic="ak.jpg" />
        <User name="Anupama Kumari" designation="M.Sc." pic="anupama.jpg" />
        <User name="Om Sharma" designation="M.Sc."/>
        <User name="Krishna Singh" designation="B.Tech" pic="krishna_singh.jpg"/>
        <User name="Sashi Bhusan Sharma" designation="M.Com" pic="s_bhusan.jpg" />
        <User name="Sonal Kumari" designation="M.Com" pic="sonal_kumari.jpg" />
        <User name="Rani Kumari" designation="M.Com" pic="rani_kumari.jpg" />
        <User name="Roshan Kumar" designation="BCA" pic="rk.jpg" />
        <User name="Shalu Kumari" designation="BCA" pic="shalu.jpg"/>
        
        <User name="Mohit Nishant" designation="Assistant Teacher" pic="nishant.jpg" />
        <User name="Sunil Kumar" designation="Assistant Teacher" pic="sunil_kumar.jpg"/>
        <User name="Nidhi Kumari" designation="Assistant Teacher" pic="nidhi_kumari.jpg"/>
        <User name="Nidhi Kumari" designation="Assistant Teacher" pic="nidhi_kumari_diff.jpg"/>
        <User name="Shri Tiu" designation="Assistant Teacher" pic="shri.jpg"/>

        <User name="Rahul Mahato" designation="Computer Trainer" pic="rahul.jpg"/>
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
  )
}
