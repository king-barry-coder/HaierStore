import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/cartSlice";
import menSummer from '../../assets/menSummer.webp'
import trendyVintage from '../../assets/trendyVintage.webp'
import sweatSuit from '../../assets/sweatSuit.webp'
import menPants from "../../assets/menPant.webp";

const mencloth = {
  Clothings: [
    {
      name: "Men's Fashion Embroidered T-shirt",
      color: "Apricot",
      price: "39.96",
      id: 9,
      image: menSummer,
    },

    {
      name: "Men's Trendy Vintage Shirt",
      color: "Black",
      price: "32.54",
      id: 10,
      image: trendyVintage,
    },

    {
      name: "Men's Fashion Outfit SweatSuit",
      color: "apricot",
      price: "41.04",
      id: 11,
      image: sweatSuit,
    },

    {
      name: "Hart Schaffner Marx Suit Dress Pants",
      color: "Gray",
      price: "29.00",
      id: 12,
      image: menPants,
    },
  ],
};

const MenCloth = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {Object.keys(mencloth).map((category) => (
              <div key={category} className="category-section">
                <p className="product-category">{category}</p>
                <div className="category-products">
                  {mencloth[category].map((product) => (
                    <div key={product.id} className="product">
                      <div className="product-card">
                        <div className="item-box">
                          <div className="image-one">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="image-on"
                            />
                          </div>
                          <div className="card">
                            <p className="product-name">{product.name}</p>
                            <p className="product-color"> <span className="color">Color: </span>{product.color}</p>
                            <p className="product-price">
                              <span>Price:</span> ${Number(product.price)}
                            </p>
                            <button
                              className="add"
                              onClick={() => dispatch(addItem(product))}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

    </div>
  )
}

export default MenCloth