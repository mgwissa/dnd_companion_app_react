import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    loggedIn: false,
    pages: [
      {
        name: "home",
        path: "/",
        current: true,
      },
      {
        name: "notes",
        path: "/notes",
        current: false,
      },
      {
        name: "character sheet",
        path: "/character-sheet",
        current: false,
      },
      {
        name: "class",
        path: "/class",
        current: false,
      },
      {
        name: "backstory",
        path: "/backstory",
        current: false,
      },
      {
        name: "sign in",
        path: "/sign-in",
        current: false,
      },
    ],
  },
  reducers: {
    setCurrentPage: (state, action) => {
      // state.currentPage = action.payload;
      state.pages.forEach((page) => {
        page.current = page.name === action.payload;
      });
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setCurrentPage, setLoggedIn } = appSlice.actions;

export default appSlice.reducer;
