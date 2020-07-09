import React from 'react'

import FeatureGroup from '../components/FeatureGroup'

export default function Features() {
  return (
    <div className='feature-container'>
      <h1 className='title'>Get best result with our expert faculties</h1>
      <div className='feature-group-container'>
        <FeatureGroup color='#4C9AFF' icon='ion-videocam' title='Digital Classes' description='All of our classroom contain projector for better visualization and grasping concept at ease.' />
        <FeatureGroup color='#FFC400' icon='ion-people' title='Expert Faculties' description='We have best faculties  having expertise in their respective fields of study.' />
        <FeatureGroup color='#57D9A3' icon='ion-book' title='Study Material' description='Students can download study material for free from anywhere in the world.' />
        <FeatureGroup color='#00C7E6' icon='ion-chatbox' title='Solve Doubts' description='We are available 24x7 for solving your doubts even for most obvious  questions.' />
        <FeatureGroup color='#8777D9' icon='ion-medal' title='Scholarship' description='Hari om academy provides scholarship to the deserving candidates.' />
      </div>
      <style jsx>{`
        .title {
          font-size: 36px;
          font-family: 'Proxima Nova Bold';
          color: #172B4D;
          margin: 0 auto;
          padding: 40px 0;
        }
        .feature-container {
          box-shadow: 0 2px 6px rgba(0,0,0,0.16);
          border-radius: 6px;
          padding: 10px;
          background: #fff;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: -120px;
          z-index: 100;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .feature-group-container{
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  )
}
