import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Add-User",
  initialState: {
    name: "",
    email: "",
    pic: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.displayName;
      state.email = action.payload.email;
      state.pic = action.payload.photoURL;
    },
    logOutUser: (state) => {
      state.name = "";
      state.email = "";
      state.pic = "";
    },
  },
});
export const { addUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
