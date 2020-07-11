import Head from 'next/head'

import MainHome from '../sections/MainHome'
import Header from '../components/Header'
import Features from '../sections/Features'
import WhyUs from '../sections/WhyUs'
import Testimonials from '../sections/Testimonials'
import DownloadApps from '../sections/DownloadApps'
import Stats from '../sections/Stats'
import Footer from '../components/Footer'
import MessageFromFounder from '../sections/MessageFromFounder'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hari Om Academy</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' />
        <script src='https://code.iconify.design/1/1.0.7/iconify.min.js'></script>
      </Head>

      <Header />
      <MainHome />

      <Features />
      <MessageFromFounder />
      <Testimonials />
      <DownloadApps />
      <Stats />
      {/* <Footer /> */}
    </div>
  )
}
