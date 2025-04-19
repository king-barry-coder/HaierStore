import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
    count: [],
    totalPrice: 0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:( state, action) => {
          const product = action.payload;
          const existingProduct = state.cart.find( (item) => item.id === product.id ); //product object: name, price, id

          if (existingProduct) {
            existingProduct.quantity = existingProduct.quantity + 1;
          } else {
            state.cart.push({ ...product, quantity: 1 });
          }
          state.totalPrice += Number(product.price);
        },


        removeItem: (state, action) => {
            const id= action.payload;
             const itemToRemove = state.cart.find((item) => item.id === id); //return the position or index of the object or product

             if (itemToRemove) {
               if (itemToRemove.quantity > 1) {
                 itemToRemove.quantity = itemToRemove.quantity - 1;
               } else {
                 state.cart = state.cart.filter((item) => item.id !== id);
               }
               state.totalPrice -= Number(itemToRemove.price);
             };
        },  
      
        clearCart: (state) => {
               state.cart = [];
               state.totalPrice = 0;
           },
    },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;