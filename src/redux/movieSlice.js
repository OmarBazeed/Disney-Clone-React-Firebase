import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    trending: null,
    original: null,
    recommand: null,
    new: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.trending = action.payload.trending;
      state.original = action.payload.original;
      state.recommand = action.payload.recommand;
      state.new = action.payload.new;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
