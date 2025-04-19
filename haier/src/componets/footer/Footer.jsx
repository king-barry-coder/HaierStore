import React from "react";
import FooterSec from "../footersec/FooterSec";
import "./footer.css";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <div>
      <footer>
        <FooterSec
          footerSecHead="Get To Know Us"
          infoOne="About Us"
          infoTwo="Careers"
          infoThree="Blog"
          infoFour="Press Releases"
          infoFive="Invetor Relations"
        />

        <FooterSec
          footerSecHead="Let Us Help You"
          infoOne="Your Account"
          infoTwo="Returns Center"
          infoThree="Help"
          infoFour="Shipping Rates"
          infoFive="Accessibility"
        />

        <FooterSec
          footerSecHead=" Payment & Security"
          infoOne="Amazon Wallet"
          infoTwo="Credit/Debit Cards"
          infoThree="Gift Cards"
          infoFour="EMI Payment Options"
          infoFive="Security"
        />

        <Socials socialHead='Haier Stores' copyRight='copyright2025haierstores.com'/>
      </footer>
    </div>
  );
};

export default Footer;
