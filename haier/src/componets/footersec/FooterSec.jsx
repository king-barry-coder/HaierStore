import React from 'react'
import './footersec.css'

const FooterSec = (props) => {
  return (
    <div>
      <section className='footer-box'>
        <p className="footerSecHead">{props.footerSecHead}</p>
        <ul>
          <li className="infoOne">{props.infoOne}</li>
          <li className="infoTwo">{props.infoTwo}</li>
          <li className="infoThree">{props.infoThree}</li>
          <li className="infoFour">{props.infoFour}</li>
          <li className="infoFive">{props.infoFive}</li>
        </ul>
      </section>
    </div>
  );
}

export default FooterSec