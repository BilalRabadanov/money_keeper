import { createSlice } from "@reduxjs/toolkit";

export const savingsReducer = createSlice({
  name: "balance",
  initialState: {
    balance: 0,
    history: [],
  },
  reducers: {
    addition: (state, action) => {
      state.balance += action.payload;
    },
    countHistory: (state, action) => {
      state.history.unshift(action.payload);
    },
    editHistoryItem: (state, action) => {
      const { id, newNum } = action.payload;
      const currentItem = state.history.find((item) => id === item.id);
      currentItem.number = newNum;
    },
    historyChangeUp: (state, action) => {
      state.balance += +action.payload;
    },
    historyChangeDown: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const {
  addition,
  historyChange,
  countHistory,
  editHistoryItem,
  historyChangeUp,
  historyChangeDown,
} = savingsReducer.actions;
export default savingsReducer.reducer;
