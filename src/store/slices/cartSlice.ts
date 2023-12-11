import { CartItemTy } from "@/types/Common.type";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
  carts: CartItemTy[];
  itemsCount: number;
  totalAmount: number;
  isCartMessageOn: boolean;
}

const fetchCategories = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState: CartState = {
  carts: fetchCategories(),
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<CartItemTy>) => {
      const isItemInCart = state.carts.find((item: CartItemTy) => item.id === action.payload?.id);
      if (isItemInCart) {
        const tempCart = state.carts.map((item: CartItemTy) => {
          if (item.id === action.payload?.id) {
            let tempQty = item.quantity + action.payload.quantity;
            // let temTotalPrice = item.quantity * item.price;
            let temTotalPrice = tempQty * item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: temTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        localStorage.setItem("cart", JSON.stringify(tempCart));
      } else {
        state.carts.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
        localStorage.setItem("cart", JSON.stringify(state.carts));
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItemTy>) => {
      const tempCart = state.carts.filter((item) => item?.id != action.payload.id);

      state.carts = tempCart;

      localStorage.setItem("cart", JSON.stringify(tempCart));
    },
    clearCart: (state) => {
      state.carts = [];
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((total, item: CartItemTy) => total + item.price * item.quantity, 0);
      state.itemsCount = state.carts.length;
    },
    editCartItemQuantity(state, action: PayloadAction<CartItemTy>) {
      const { id, quantity, price } = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = quantity * price;
      }

      localStorage.setItem("cart", JSON.stringify(state.carts));
    },

    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
  },
});

export const { addtoCart, setCartMessageOn, setCartMessageOff, editCartItemQuantity, removeFromCart, getCartTotal } = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart;

export const cartItemCount = (state: RootState) => state.cart.itemsCount;

export default cartSlice.reducer;
