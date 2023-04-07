import { configureStore } from "@reduxjs/toolkit";

import savingsReducer from "./savings/savingsSlice";

export const store = configureStore({
  reducer: {
    savings: savingsReducer,
  },
});
