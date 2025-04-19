import React from 'react'
import './homeproductcard.css'
import { Link } from 'react-router-dom';

const HomeProductCard = (props) => {
  return (
    <div>
      <div className="hero-product-card">
        <p className="heroProductHeadInfo">{props.heroProductHeadInfo}</p>
        <div className="hero-product-card-box">
          <img src={props.card} alt="" className="card" />
        </div>
        <div className="action">
          <p className="heroProductName">{props.heroProductName}</p>
          <p className="heroPrice">
            <span className="span">Price</span> {props.heroPrice}
          </p>
          <div className="cardButton">
            {props.cardButton}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard




