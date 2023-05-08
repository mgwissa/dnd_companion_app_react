import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    loggedIn: false,
    pages: {
      home: {
        name: "home",
        path: "/",
        current: true,
      },
      notes: {
        name: "notes",
        path: "/notes",
        current: false,
      },
      characterSheet: {
        name: "character sheet",
        path: "/character-sheet",
        current: false,
      },
      class: {
        name: "class",
        path: "/class",
        current: false,
      },
      backstory: {
        name: "backstory",
        path: "/backstory",
        current: false,
      },
      signIn: {
        name: "sign in",
        path: "/sign-in",
        current: false,
      },
    },
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setCurrentPage, setLoggedIn } = appSlice.actions;

export default appSlice.reducer;
