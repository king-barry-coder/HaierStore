import React from 'react'
import { addItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import oulylan from '../../assets/oulylan.webp'
import ankleBoot from '../../assets/ankleBoot.webp'
import casualPreppy from '../../assets/casualPreppy.webp'
import skatingShoe from '../../assets/skatingShoe.webp'


const menshoe = {
  menShoe: [
    {
      name: "Oulyan knit Walking Shoe",
      color: "Black",
      price: "78.04",
      id: 17,
      image: oulylan,
    },

    {
      name: "Men's Beige Suede Ankle High Boot",
      color: "Apricot",
      price: "199.99",
      id: 18,
      image: ankleBoot,
    },

    {
      name: "Men's Mid Top Casual Prippy Shoes",
      color: "Black and white",
      price: "25.09",
      id: 19,
      image: casualPreppy,
    },

    {
      name: "High Top Skateboarding Shoes",
      color: "Green",
      price: "35.09",
      id: 20,
      image: skatingShoe,
    },
  ],
};


const MenShoe = () => {
  const distpacth = useDispatch();
  return (
    <div>
      {Object.keys(menshoe).map((category) => (
              <div key={category} className="category-section">
                <p className="product-category">{category}</p>
                <div className="category-products">
                  {menshoe[category].map((product) => (
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
                              onClick={() => distpacth(addItem(product))}
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

export default MenShoe