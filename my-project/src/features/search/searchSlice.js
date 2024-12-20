import { createSlice } from "@reduxjs/toolkit";

// Initial state for the search slice
const initialState = {
  text: "", // The search query text
};

// Create the search slice
const searchSlice = createSlice({
  name: 'searchState',
  initialState,
  reducers: {
    // Action to set the search query
    setSearchQuery: (state, action) => {
      state.text = action.payload.text;
    },
    // Action to clear the search query
    clearSearchQuery: (state) => {
      state.text = "";
    },
  },
});

// Export the actions
export const { setSearchQuery, clearSearchQuery } = searchSlice.actions;

// Export the reducer
export default searchSlice.reducer;
