import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    trending: [],
    original: [],
    recommend: [],
    newDisney: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.trending = action.payload.trending;
      state.original = action.payload.original;
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
