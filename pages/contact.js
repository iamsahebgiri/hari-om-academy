import React from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function contact() {
  return (
    <div>
      <Header />
      <Jumbotron title="Campuses across JSR" description='Come anytime and would love to help you.' />
      <Contact />
      <Footer />
    </div>
  )
}
