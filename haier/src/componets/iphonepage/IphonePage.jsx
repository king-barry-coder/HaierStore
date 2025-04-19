import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import './iphonepage.css'
import iphone7plus from '../../assets/iphone7Plus.webp'
import iphone13 from '../../assets/iphone13.webp'
import iphone14 from '../../assets/iphone14.webp'
import iphone15 from '../../assets/iphone15.webp'


const apple = {
  Apple: [
    { name: " Apple Iphone 7 Plus New (32gb)", color: "Red", price: "79", id: 1, image:iphone7plus },

    {
      name: " Apple Iphone 13 (128gb) Dual Sim",
      color: "White",
      price: "1179",
      id: 2,
      image: iphone13,
    },

    {
      name: "Apple Iphone 14 pro Max (128gb)",
      color: "Deep Purple",
      price: "1390",
      id: 3,
      image: iphone14,
    },
    {
      name: "Apple Iphone 15 Pro Max (1TB) Dual Sim",
      color: "Natural Titanium",
      price: "2246",
      id: 4,
      image: iphone15,
    },
  ],

};


// without the filter for search 
const IphonePage = () => {
  const dispatch = useDispatch();

 
  return (
    <div>
      {Object.keys(apple).map((category) => (
        <div key={category} className="category-section">
          <p className="product-category">{category}</p>
          <div className="category-products">
            {apple[category].map((product) => (
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
  );
};

export default IphonePage;



// const IphonePage = ({ searchProduct = "" }) => {
//   const dispatch = useDispatch();

//  const filterProducts = (products) =>
//    products.filter((product) =>
//      searchProduct
//        ? product.name.toLowerCase().includes(searchProduct.toLowerCase())
//        : true
//    );

//   return (
//     <div>
//       {Object.keys(apple).map((category) => {
//         const filtered = filterProducts(apple[category]);
//         if (filtered.length === 0) return null;

//         return (
//           <div key={category} className="category-section">
//             <p className="product-category">{category}</p>
//             <div className="category-products">
//               {filtered.map((product) => (
//                 <div key={product.id} className="product">
//                   <div className="product-card">
//                     <div className="item-box">
//                       <div className="image-one">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="image-on"
//                         />
//                       </div>
//                       <div className="card">
//                         <p className="product-name">{product.name}</p>
//                         <p className="product-color">
//                           <span className="color">Color: </span>
//                           {product.color}
//                         </p>
//                         <p className="product-price">
//                           <span>Price:</span> ${Number(product.price)}
//                         </p>
//                         <button
//                           className="add"
//                           onClick={() => dispatch(addItem(product))}
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default IphonePage;



 // const filterProducts = (products) =>
  //   products.filter((product) =>
  //     product.name.toLowerCase().includes(searchProduct.toLowerCase())
  //   );

