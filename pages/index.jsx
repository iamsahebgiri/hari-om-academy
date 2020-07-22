import React from 'react';
import Head from 'next/head';

import MainHome from '../sections/MainHome';
import Header from '../components/Header';
import Features from '../sections/Features';
import WhyUs from '../sections/WhyUs';
import Testimonials from '../sections/Testimonials';
import DownloadApps from '../sections/DownloadApps';
import Stats from '../sections/Stats';
import Footer from '../components/Footer';
import MessageFromFounder from '../sections/MessageFromFounder';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hari Om Academy | Home</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>

      <Header />
      <MainHome />

      <Features />
      <WhyUs />
      <Testimonials />
      <DownloadApps />
      <Stats />
      <MessageFromFounder />
      <Footer />
    </div>
  );
}
