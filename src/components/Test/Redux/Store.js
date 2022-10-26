import { configureStore } from "@reduxjs/toolkit";
import infoGameReducer from "./Slice.js";
export const store = configureStore({
   reducer: {
      game: infoGameReducer,
   },
});
