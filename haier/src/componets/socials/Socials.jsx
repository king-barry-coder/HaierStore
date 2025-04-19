import React from 'react'
import './socials.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import tiwtter from '../../assets/twitter-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import youtube from '../../assets/youtube-icon.png'


const Socials = (props) => {
  return (
    <div>
      <section className="social-box">
        <p className="socialHead">{props.socialHead}</p>
        <div className="socials">
          <a href="#" className="social-logo">
            <img src={facebook} alt="facebook-logo" className="logos" />
          </a>
          <a href="#" className="social-logo">
            <img src={instagram} alt="instagram-logo" className="logos" />
          </a>
          <a href="#" className="social-logo">
            <img src={tiwtter} alt="tiwtter-logo" className="logos" />
          </a>
          <a href="#" className="social-logo">
            <img src={linkedin} alt="linkedin-logo" className="logos" />
          </a>
          <a href="#" className="social-logo">
            <img src={youtube} alt="youtube-logo" className="logos" />
          </a>
        </div>
        <p className='copyRight'>{props.copyRight}</p>
      </section>
    </div>
  );
}

export default Socials

