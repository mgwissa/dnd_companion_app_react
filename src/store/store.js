import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import appSlice from "./slices/app-slice";

const makeStore = () => {
  return configureStore({
    reducer: {
      app: appSlice,
    },
    devTools: true,
  });
};

export const wrapper = createWrapper(makeStore);
