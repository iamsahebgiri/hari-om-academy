import React from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

export default function fees() {
  return (
    <div>
     <Header />
      <Jumbotron title='Fees Structure' description='We are transparent when it comes to money.' />
      <div className="container">
       
      </div>

      <Footer />
      <style jsx>
        {`
        .container {
          margin: 0 auto;
          padding: 10px;
        }
        img {
          max-height: 500px;
          border-radius: 10px;
        }
        .item {
          height: 500px;
        }
        @media only screen and (max-width: 992px) {
          
        }
        `}
      </style>
      <style global jsx>
        {`
        
        `}
      </style>
    </div>
  )
}
