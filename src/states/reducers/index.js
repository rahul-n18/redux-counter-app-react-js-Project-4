import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return (state += action.payload);
    },

    decrement: (state, action) => {
      return (state -= action.payload);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
