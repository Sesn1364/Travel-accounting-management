import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./slices/tripSlice"; // اضافه کردن ردیوسر سفر

export const store = configureStore({
  reducer: {
    trip: tripReducer,
  },
});

// تایپ RootState و AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
