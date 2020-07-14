import React from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import CourseSection from '../sections/CourseSection'

export default function courses() {
  return (
    <>
      <Header />
      <Jumbotron title='Courses at your finger tips' description='Hari Om Academy cover all courses you can <br />think of with perfection.' />
      <CourseSection />
    </>
  )
}
