import React from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

export default function about() {
  return (
    <div>
      <Header />
      <Jumbotron title="About us" description='Hari om academy is built with passion.' />
      <div className="container">
        <div className="box">
          <p>
            Every student has a dream which inspires him/her to work hard in depth knowledge, quality guidance and good source of study. These are required to achieve his dream in this era of competitive environment.</p>
          <p>We, Hari Om Academy, family have passion to serve student community by way of providing good source of study, quality guidance, Senior Support, best environment to the student community for achieving their dream.</p>
          <p>
            We give students a chance to open up by their knowledge and other activities. Hari Om Academy gives you a thought that you can fulfill your dreams.</p>

          <p>Hari Om academy is providing a comprehensive educational facility by young teacher to foster an enthusiastic, creative community of learners to continue their intellectual, emotional and physical development. We forge strong positive connection with students for their development of skill and for academic knowledge and for that we recruit our well qualified experienced students as our faculty in our academy. We create competition to develop a curiosity of learning and we provide scholarship to bright student in our all 5 branches and we also guide student for mental development for their bright future.  </p>
        </div>
        <div className="box">
          <h1>Mission</h1>
          <p>
            Hari Om Academy is dedicated to deliver effective, innovative and excellence study to the student that will make him/her rational with an inquisitive and argumentative bent of mind through differentiated approach of learning. Hari Om Academy emphasize to give new incarnation in the field of education by a determination mind to ignite the whole world. Apart from this personality development, leadership skill, character building are the main aspect of overall development, regarding in this way it’s our mission to refine the way of learning and we are still this way.
      </p>
        </div>

      </div>
      <Footer />
      <style jsx>
        {`
          h1 {
            font-size: 28px;
            font-family: 'Proxima Nova Bold';
            margin-top: 10px;
            text-align: center;
            color: #172B4D;
          }
          p {
            margin-top: 10px;
            line-height: 24px;
            
          }
          .container {
            max-width: 1000px;
            margin: 30px auto;
            color: #172B4D;
          }
          .box {
          box-shadow: 0 2px 4px rgba(0,0,0,0.12);
          border-radius: 6px;
          padding: 20px;
          background: #fff;
          margin-bottom: 30px;
        }
        @media only screen and (max-width: 992px) {
          .container {
            margin: 10px auto;
            padding: 10px;
          }

          .box {
            border: 1px solid #EFF2F7;
            box-shadow: none;
            border-radius: 6px;
          }
        }
        `}
      </style>
    </div>
  )
}
