import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
    name: "wish",
    initialState: {
        wishlist: [],
    },
    reducers: {
        addToWish: (state, action) => {
            const item = state.wishlist.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
                item.quantity++;
                item.attributes.price = item.oneQuantityPrice;
            } else {
                state.wishlist.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state, action) => {
            state.wishlist = state.wishlist.map((p) => {
                if (p.id === action.payload.id) {
                    if (action.payload.key === "quantity") {
                        p.attributes.price =
                            p.oneQuantityPrice * action.payload.val;
                    }
                    return { ...p, [action.payload.key]: action.payload.val };
                }
                return p;
            });
        },
        removeFromCart: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (p) => p.id !== action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToWish, updateCart, removeFromCart } = wishSlice.actions;

export default wishSlice.reducer;
