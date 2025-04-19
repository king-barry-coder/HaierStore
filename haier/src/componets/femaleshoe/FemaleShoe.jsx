import React from 'react'
import { addItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import casualSneakers from '../../assets/chunkySneakers.webp'
import platformSneakers from '../../assets/platformSneakers.webp'
import whiteStarChunky from '../../assets/whiteStarChunky.webp'
import womenHighLaceUp from '../../assets/womenHighLaceUp.webp'


const femaleshoe = {
  femaleShoe: [
    {
      name: "Women's  Mesh Cunky Sneakers",
      color: "white",
      price: "35.05",
      id: 21,
      image: casualSneakers,
    },

    {
      name: "Women's Platform Shoe with skull Cross Pendant",
      color: "black",
      price: "39.01",
      id: 22,
      image: platformSneakers, 
    },

    {
      name: "Women's White Star Chunky Sneakers",
      color: "white",
      price: "35.05",
      id: 23,
      image: whiteStarChunky,
    },

    {
      name: "Women's Lace-up High Heel Thick Bottom ",
      color: "white",
      price: "35.05",
      id: 24,
      image: womenHighLaceUp,
    },
  ],
};

const FemaleShoe = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {Object.keys(femaleshoe).map((category) => (
              <div key={category} className="category-section">
                <p className="product-category">{category}</p>
                <div className="category-products">
                  {femaleshoe[category].map((product) => (
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

export default FemaleShoe