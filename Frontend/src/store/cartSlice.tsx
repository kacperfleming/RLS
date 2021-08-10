import {createSlice} from '@reduxjs/toolkit'

type cartItem = {
    itemName: string;
    description: string;
    quantity: number;
    price: number;
}

export interface CartSlice {
    cartItems: cartItem[],
    totalPrice: number,
}

const initialState:CartSlice = {
    cartItems: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            
        },
        removeFromCart(state, action) {
            
        }
    }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;