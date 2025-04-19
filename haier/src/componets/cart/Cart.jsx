import React from "react";
import { removeItem, clearCart } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("total price", totalPrice);

  return (
    <div>
      <div className="main-box">
        <div className="protect">
          <p className="text-center">Cart </p>
          {cart.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            <div className="list-group">
              {cart.map((item) => (
                <div key={item.id} className="chart-list">
                  <div className="spacing">
                    < p className="item-name">{item.name}</p>
                     <p className="item-quantity"> <span className="quantity">Quantity: </span> * {item.quantity}</p>  
                    <p className="sub-total"> <span className="spa">Sub Total: </span> ${item.price * item.quantity}</p>
                  </div>
                  
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="spacing-two">
          <p className="cart-total-price">Total Price: ${totalPrice}</p>

          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
