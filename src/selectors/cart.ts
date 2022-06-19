import { createSelector } from "@reduxjs/toolkit";
import { cartSelector } from "../features/cart/cartSlice";
import { selectAllProducts } from "../features/products/productsSlice";


export const cartProducts = createSelector(
    selectAllProducts,
    cartSelector,
    (entities, cartItems) => entities.filter(elem => {
        return cartItems.find(item => item.id === elem.id)
    })
);