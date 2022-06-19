import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";
import { ProductItemProps } from "../../components/products/ProductPreview"

type QuantityProps = {
    quantity: number
}

type CartProps = Pick<ProductItemProps, 'id' | 'price'> & QuantityProps;

type InitialStateProps = {
    cartItems: CartProps[],
}

const initialState: InitialStateProps = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: InitialStateProps, action: PayloadAction<ProductItemProps>) => {
            const { id, price } = action.payload;
            // check if id is already in state
            const product = state.cartItems.findIndex(elem => elem.id === id);
            if (product === -1) {
                // add new item to state and initialize quantity with 1 
                state.cartItems.push({ id: id, price: price, quantity: 1 });
            }
        },
        removeFromCart: (state: InitialStateProps, action: PayloadAction<ProductItemProps>) => {
            const { id } = action.payload;
            state.cartItems.splice(state.cartItems.findIndex(elem => elem.id === id), 1);
        }
    },

});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const cartSelector = (state: RootState) => state.cart.cartItems;