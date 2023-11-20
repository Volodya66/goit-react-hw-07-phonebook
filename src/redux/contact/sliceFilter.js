import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  filter: '',
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default filtersSlice.reducer;

export const { setStatusFilter } = filtersSlice.actions;