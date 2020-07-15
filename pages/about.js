import React from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

export default function about() {
  return (
    <div>
      <Header />
      <Jumbotron title="About us" description='Hari om academy is built with passion.' />
      
      <Footer />
    </div>
  )
}
