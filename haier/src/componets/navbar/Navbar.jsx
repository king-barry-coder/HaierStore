import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../assets/haierLogo.png'
import cartImg from '../../assets/cart.png'
import './navbar.css'
import NabarProfile from '../navbarprofile/NabarProfile'



const Navbar = ({ setSearchProduct, searchProduct }) => {
  const cart = useSelector((state) => state.cart.cart);
  //  get and calculate  quantity of added items
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // const Navbar = ({ setSearchTerm, searchTerm }) => {
  //   const cart = useSelector((state) => state.cart.cart);
  //   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="Haier store logo" className="haier-logo" />
        </div>

        <div className="bar">
          <input
            type="search"
            name="search "
            id="search"
            className="search-bar"
            placeholder="Search products..."
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>

        <div className="navbar-btn">
          <button className="nav-btn">Sign Up</button>
          <button className="nav-btn">Sign In</button>
        </div>

        <div className="navbar-end">
          <div className="navbar-cart">
            <img src={cartImg} alt="cart image" className="cart-image" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>

          <NabarProfile />
        </div>
      </nav>
    </div>
  );
};

export default Navbar