import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textFilter:  "alex",
  arrayFilter: [],
  userDetail: "",
  userDetailImg: "",
  displayDetail: false
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    filterUser: (state, action) => {
      const { textFilter, arrayFilter} = action.payload
      state.textFilter = textFilter;
      state.arrayFilter = arrayFilter;
    },
    userDetail: (state, action) => {
      const { user, display, img } = action.payload
      state.userDetail = user;
      state.userDetailImg = img;
      state.displayDetail = display;
    },
  }
});

export const { filterUser, userDetail } = userSlice.actions;
export default userSlice.reducer;
