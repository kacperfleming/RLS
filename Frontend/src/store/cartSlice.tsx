import { createSlice } from "@reduxjs/toolkit";

type Product = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
};

type Offer = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  offerrorGroup: string;
  area: string;
  option: string;
  reason: string;
  isUrgent: boolean;
  products: Product[];
};

export interface CartSlice {
  offers: Offer[];
  totalPrice: number;
}

const DUMMY_PRODUCTS = [
  {
    id: "2",
    name: "Bazylia",
    description: "Świeża bazylia uprawiana bez używania sztucznych pestycydów.",
    quantity: 50,
    price: 3.5,
  },
  {
    id: "abcdefg",
    name: "Ręcznie robione krzesła",
    description:
      "Rzeźbione, dębowe krzesła ogrodowe wykonywane ręcznie i zaimpregnowane.",
    quantity: 10,
    price: 400,
  },
  {
    id: "abcdefgh",
    name: "Miód lipowy",
    description: "Pakowany w słoikach o pojemności 1L.",
    quantity: 25,
    price: 6.2,
  },
];

const DUMMY_OFFERS = [
  {
    id: "1",
    name: "Nazwa oferty",
    description: "Opis oferty",
    price: 50.25,
    discount: 10,
    category: "kategoria",
    offerrorGroup: "grupa oferująca",
    area: "obszar",
    option: "opcja",
    reason: "powód",
    isUrgent: true,
    products: DUMMY_PRODUCTS,
  },
];

const initialState: CartSlice = {
  offers: DUMMY_OFFERS,
  totalPrice: 40.25,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state: CartSlice, action) {
      state.offers.push(action.payload);
    },
    removeFromCart(state: CartSlice, action) {
      state.offers.filter(offer => offer.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
