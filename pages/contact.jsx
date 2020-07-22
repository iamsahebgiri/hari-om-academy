import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function contact() {
  return (
    <div>
      <Head>
        <title>Campuses across JSR | Hari Om Academy</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron title="Campuses across JSR" description="Come anytime and would love to help you." />
      <Contact />
      <Footer />
    </div>
  );
}
