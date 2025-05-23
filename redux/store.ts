import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "./slices/base-slice";
import idxReducer from "./slices/idx-slice";
import resultReducer from "./slices/result-slice";

export const store = configureStore({
  reducer: {
    resultReducer,
    baseReducer,
    idxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
