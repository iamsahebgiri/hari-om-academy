import React from 'react'

export default function Contact() {
  return (
    <div className='container'>

      <div className="box">
        <h2>Chhota Govindpur Campus</h2>
        <a className="tel" href="tel:+918210026457">+91 8210026457</a>
        <a className='wa' href="https://api.whatsapp.com/send?phone=+918210026457&text=Hi" target="_blank" rel="noopener noreferrer">Whatsapp</a>
        Chhota Govindpur,<br /> 
        Near Shri Ram Mandir,<br /> 
        Govindpur Bus Stand,<br /> 
        Jamshedpur,<br /> 
        Jharkhand 831015
        
      </div>
      <div className="box">
        <h2>Govindpur Campus</h2>
        <a className="tel" href="tel:+918210026457">+91 8210026457</a>
        <a className='wa' href="https://api.whatsapp.com/send?phone=+918210026457&text=Hi" target="_blank" rel="noopener noreferrer">Whatsapp</a>
        Govindpur, <br />
        Near RNS ITI,<br /> 
        Vishram Nagar Asanboni Road,<br /> 
        Jamshedpur,<br /> 
        Jharkhand 831004
      </div>
      <div className="box">
        <h2>Rahargora Campus</h2>
        <a className="tel" href="tel:+918210026457">+91 8210026457</a>
        <a className='wa' href="https://api.whatsapp.com/send?phone=+918210026457&text=Hi" target="_blank" rel="noopener noreferrer">Whatsapp</a>
        Rahargora,<br /> 
        Near A.B.M.P.A. High School,<br /> 
        Jamshedpur,<br /> 
        Jharkhand 831016
      </div>
      <div className="box">
        <h2>Sarjamda Campus</h2>
        <a className="tel" href="tel:+918210026457">+91 8210026457</a>
        <a className='wa' href="https://api.whatsapp.com/send?phone=+918210026457&text=Hi" target="_blank" rel="noopener noreferrer">Whatsapp</a>
        Sarjamda,<br /> 
        Nidhir Tola,<br /> 
        Near Maharana Pratap Chowk,<br /> 
        Jamshedpur,<br /> 
        Jharkhand 831016
      </div>
      <div className="box">
        <h2>Purshudih Campus</h2>
        <a className="tel" href="tel:+918210026457">+91 8210026457</a>
        <a className='wa' href="https://api.whatsapp.com/send?phone=+918210026457&text=Hi" target="_blank" rel="noopener noreferrer">Whatsapp</a>
        Purshudih,<br /> 
        Near Chandni Chowk,<br /> 
        Jamshedpur,<br /> 
        Jharkhand 831016
      </div>
      <style jsx>
        {`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          justify-items: center;
          grid-gap: 20px;
          padding: 20px 0;
          color: #172B4D;
        }
        .box {
          box-shadow: 0 2px 4px rgba(0,0,0,0.12);
          border-radius: 6px;
          padding: 20px;
          background: #fff;
          width: 300px;
        }
        a {
          display: block;
          text-decoration: none;
          font-family: 'Proxima Nova Semibold';
          color:  #4c9aff;
        }
        a:hover  {
          text-decoration: underline;
        }
        .tel{
          margin-bottom: 10px;
        }
        .wa {
          margin-bottom: 10px;
        }
        h2 {
          font-family: 'Proxima Nova Bold';
          font-size: 21px;
          margin-bottom: 10px;
        }
        @media only screen and (max-width: 992px) { 
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
