import React from "react";
import "./heroone.css";
import HomeProductCard from "../homeproductcard/HomeProductCard";
import heroPhone from '../../assets/iphone15.webp';
import heroPlatform from '../../assets/platformSneakers.webp';
import heroOulylan from '../../assets/oulylan.webp';
import heroMenSummer from '../../assets/menSummer.webp';
import { Link } from "react-router-dom";






const HeroOne = () => {

   

  return (
    <div>
      <section>
        <div className="background-img">
          <div className="wrapper-one">
            <div className="wrapper">
              <HomeProductCard
                heroProductHeadInfo="Shop Deals In Phones"
                card={heroPhone}
                heroProductName="Iphone 13 (128 GB) Dual sim"
                heroPrice="$1,156"
                cardButton={
                  <Link to="productpage/iphonepage" className="link">
                    Shop Now
                  </Link>
                }
              />
              <HomeProductCard
                heroProductHeadInfo="Discover Latest female Sneakers"
                card={heroPlatform}
                heroProductName="Women High-Top Platform Sneakers"
                heroPrice="$131.90"
                cardButton={
                  <Link to="productpage/femaleshoe" className="link">
                    Shop Now
                  </Link>
                }
              />

              <HomeProductCard
                heroProductHeadInfo="Latest Footwear Arrival"
                card={heroOulylan}
                heroProductName="Oulylan Men's Knit Walking Shoe"
                heroPrice="$78.40"
                cardButton={
                  <Link to="productpage/menshoe" className="link">
                    Shop Now
                  </Link>
                }
              />

              <HomeProductCard
                heroProductHeadInfo="Trending In Fashion"
                card={heroMenSummer}
                heroProductName="Men's Fashion Embroidered T-Shirt"
                heroPrice="$78.40"
                cardButton={
                  <Link to="productpage/mencloth" className="link">
                    Shop Now
                  </Link>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroOne;
