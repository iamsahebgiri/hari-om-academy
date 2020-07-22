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
        <title>Our faculties | Hari Om Academy</title>
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
