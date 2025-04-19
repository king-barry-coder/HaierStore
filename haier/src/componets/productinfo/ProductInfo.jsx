import React from 'react'
import './productinfo.css'
import {useDispatch} from "react-redux"
import { addItem } from '../redux/cartSlice'
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import Cart from '../cart/Cart';


const products = {
  Apple: [
    { name: "Iphone 7", color: "Red", price: "79", id: 1 },
    { name: "Iphone 13", color: "White", price: "1,179", id: 2 },
    { name: "Iphone 14", color: "Deep Purple", price: "1,390", id: 3 },
    { name: "Iphone 15", color: "Natural Titanium", price: "2,246", id: 4 },
  ],

  Samsung: [
    { name: "Samsung Galaxry A53 5G", color: "Peach", Price: "210.24", id: 5 },
    {
      name: "Samsung Galaxry S24 Ultra",
      color: "Black",
      Price: "1,350",
      id: 6,
    },
    { name: "Samsung Galaxry A55 5G", color: "Lilac", Price: "599.03", id: 7 },
    { name: "Samsung Galaxry A15", color: "Blue Black", Price: "98.83", id: 8 },
  ],

  menCloth: [
    {
      name: "Men's Fashion Embroidered T-shirt",
      color: "Apricot",
      price: "39.96",
      id: 9,
    },

    {
      name: "Men's Trendy Vintage Shirt",
      color: "Black",
      price: "32.54",
      id: 10,
    },

    {
      name: "Men's Fashion Outfit SweatSuit",
      color: "apricot",
      price: "41.04",
      id: 11,
    },

    {
      name: "Hart Schaffner Marx Suit Dress Pants",
      color: "Gray",
      price: "29.00",
      id: 12,
    },
  ],

  FemaleCloth: [
    {
      name: "Royal Blue Mermaid Prom Dress",
      color: "Blue",
      price: "179.90",
      id: 13,
    },

    {
      name: "Women's Suit Dressy Business Work",
      color: "Royal Blue",
      price: "44.05",
      id: 14,
    },

    {
      name: "Dressy Woman's Wrap Buttock Skirt Suit ",
      color: "Black",
      price: "106.74",
      id: 15,
    },

    {
      name: "women's Casual Square Neck Long sleeve",
      color: "Burgundy",
      price: "15.09",
      id: 16,
    },
  ],

  menShoe: [
    {
      name: "Oulyan knit Walking Shoe",
      color: "Black",
      price: "78.04",
      id: 17,
    },

    {
      name: "Men's Beige Suede Ankle High Boot",
      color: "Apricot",
      price: "199.99",
      id: 18,
    },

    {
      name: "Men's Mid Top Casual Prippy Shoes",
      color: "Black and white",
      price: "25.09",
      id: 19,
    },

    {
      name: "High Top Skateboarding Shoes",
      color: "Green",
      price: "35.09",
      id: 20,
    },
  ],

  femaleShoe: [
    {
      name: "women's  Mesh Cunky Sneakers",
      color: "white",
      price: "35.05",
      id: 21,
    },

    {
      name: "women's High-Top Platform with skull Cross Pendant",
      color: "black",
      price: "39.01",
      id: 22,
    },
  ],
};

const ProductInfo = () => {
    const dispatch = useDispatch();
  return (
    <div className="section">
      <div className="category-sec">
        <ul>
          <p className="p">Phones</p>
          <Link to="iphonepage" className="link">
            <li>
              <span>. </span>iphone
            </li>
          </Link>

          <Link to="samsungpage" className="link">
            <li>
              <span>. </span>Samsung
            </li>
          </Link>

          <p className="p">Wears</p>
          <Link to="mencloth" className="link">
            <li>
              <span>. </span>Men's clothing
            </li>
          </Link>

          <Link to="femalecloth" className="link">
            <li>
              <span>. </span>Women's Clothing
            </li>
          </Link>

          <p className="p">Footwears</p>
          <Link to="menshoe" className="link">
            <li>
              <span>. </span> Men Shoes
            </li>
          </Link>

          <Link to="femaleshoe" className="link">
            <li>
              <span>. </span> Female Shoes
            </li>
          </Link>
        </ul>

        <button className='info-btn' >
            <Link to='/' className='info-btn-link'> Back Home</Link>
        </button>
      </div>


      <div className="product-view-box">
        <Outlet />
      </div>

      <Cart />
    </div>
  );
}

export default ProductInfo