import React from 'react'
import { addItem } from "../redux/cartSlice";
import { useDispatch } from 'react-redux';
import './samsungpage.css'
import samA15 from "../../assets/samA15.webp";
import samA53 from "../../assets/samA53.webp";
import samA55 from "../../assets/samA55.webp";
import sams24 from "../../assets/sams24.webp";

const samsung = {
  Samsung: [
    {
      name: "Samsung Galaxy A53 5G (256gb)",
      color: "Peach",
      price: "210.24",
      id: 5,
      image: samA53,
    },

    {
      name: "Samsung Galaxy S24 Ultra (256gb)",
      color: "Black",
      price: "1350",
      id: 6,
      image: sams24,
    },

    {
      name: "Samsung Galaxy A55 5G (256gb)",
      color: "Lilac",
      price: "599.03",
      id: 7,
      image: samA55,
    },

    {
      name: "Samsung Galaxy A15 (128gb)",
      color: "Blue Black",
      price: "98.83",
      id: 8,
      image: samA15,
    },
  ],
};

const SamsungPage = () => {
  const dispatch = useDispatch(); 
  return (
    <div>
      <div>
        {Object.keys(samsung).map((category) => (
          <div key={category} className="category-section">
            <p className="product-category">{category}</p>
            <div className="category-products">
              {samsung[category].map((product) => (
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
                        <p className="product-color">
                          {" "}
                          <span className="color">Color: </span>
                          {product.color}
                        </p>
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
    </div>
  );
}

export default SamsungPage