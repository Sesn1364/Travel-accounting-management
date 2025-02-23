import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TripState {
  tripName: string;
  tripDate: string;
}

const initialState: TripState = {
  tripName: "سفر جدید",
  tripDate: "",
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTripName: (state, action: PayloadAction<string>) => {
      state.tripName = action.payload;
    },
    setTripDate: (state, action: PayloadAction<string>) => {
      state.tripDate = action.payload;
    },
  },
});

export const { setTripName, setTripDate } = tripSlice.actions;
export default tripSlice.reducer;
