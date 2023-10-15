import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../Redux/Features/backgroundSlider";

export const store = configureStore({
  reducer: {
    slider: imageReducer,
  },
});
