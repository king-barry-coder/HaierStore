import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/cartSlice";
import mermaidProm from '../../assets/mermaidProm.webp'
import womenSuit from '../../assets/womanSuit.webp'
import womenButtockSuit from '../../assets/womenButtockSuit.webp'
import womenSquare from "../../assets/womenSquare.webp";

const femalecloth = {
  Clothings: [
    {
      name: "Royal Blue Mermaid Prom Dress",
      color: "Blue",
      price: "179.90",
      id: 13,
      image: mermaidProm,
    },

    {
      name: "Women's Suit Dressy Business Work",
      color: "Royal Blue",
      price: "44.05",
      id: 14,
      image: womenSuit,
    },

    {
      name: "Dressy Woman's Wrap Buttock Skirt Suit ",
      color: "Black",
      price: "106.74",
      id: 15,
      image: womenButtockSuit,
    },

    {
      name: "women's Casual Square Neck Long sleeve",
      color: "Burgundy",
      price: "15.09",
      id: 16,
      image: womenSquare,
    },
  ],
};

const FemaleCloth = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {Object.keys(femalecloth).map((category) => (
              <div key={category} className="category-section">
                <p className="product-category">{category}</p>
                <div className="category-products">
                  {femalecloth[category].map((product) => (
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

export default FemaleCloth