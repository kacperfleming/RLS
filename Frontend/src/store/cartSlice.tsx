import { createSlice } from "@reduxjs/toolkit";

type cartItem = {
  id: string;
  author: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
};

export interface CartSlice {
  items: cartItem[];
  totalPrice: number;
}

const DUMMY_DATA = {
  items: [
    {
      id: "abcdef",
      author: "Jan Kowalski",
      name: "Bazylia",
      description:
        "Świeża bazylia uprawiana bez używania sztucznych pestycydów.",
      quantity: 50,
      price: 3.5,
    },
    {
      id: "abcdefg",
      author: "Jakub Nowak",
      name: "Ręcznie robione krzesła",
      description:
        "Rzeźbione, dębowe krzesła ogrodowe wykonywane ręcznie i zaimpregnowane.",
      quantity: 10,
      price: 400,
    },
    {
      id: "abcdefgh",
      author: "Bartosz Wiśniewski",
      name: "Miód lipowy",
      description: "Pakowany w słoikach o pojemności 1L.",
      quantity: 25,
      price: 6.2,
    },
  ],
  totalPrice: 4330,
};

const initialState: CartSlice = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: DUMMY_DATA,
  reducers: {
    addToCart(state:CartSlice, action) {
      state.items = [...state.items, action.payload];
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeFromCart(state:CartSlice, action) {
        const item = state.items.find(item => item.id === action.payload);
        state.totalPrice -= item!.price * item!.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state:CartSlice, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const item = state.items.find((item) => item.id === action.payload);
      item!.quantity += 1;
      const newState = state.items;
      newState[index] = item!;
      state.items = newState;
      state.totalPrice += item?.price!;
    },
    decrementQuantity(state:CartSlice, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const item = state.items.find((item) => item.id === action.payload);
      item!.quantity -= 1;
      const newState = state.items;
      newState[index] = item!;
      state.items = newState;
      state.totalPrice -= item?.price!;
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
