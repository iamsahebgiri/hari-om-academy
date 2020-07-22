import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import CourseSection from '../sections/CourseSection';
import PaidCourseSection from '../sections/PaidCourseSection';

export default function courses() {
  return (
    <>
      <Head>
        <title>Courses At A Glance | Hari Om Academy</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron title="Courses At A Glance" description="We cover all courses you can <br />think of." />
      <CourseSection />
      <PaidCourseSection />
      <Footer />
    </>
  );
}
