// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Trip {
//   name: string;
//   date: string;
// }

// interface TripState {
//   tripName: string;
//   tripDate: string;
//   trips: Trip[];
// }

// const initialState: TripState = {
//   tripName: "",
//   tripDate: "",
//   trips: [],
// };

// const tripSlice = createSlice({
//   name: "trip",
//   initialState,
//   reducers: {
//     setTripName: (state, action: PayloadAction<string>) => {
//       state.tripName = action.payload;
//     },
//     setTripDate: (state, action: PayloadAction<string>) => {
//       state.tripDate = action.payload;
//     },
//     addTrip: (state) => {
//       if (state.tripName && state.tripDate) {
//         state.trips.push({ name: state.tripName, date: state.tripDate });
//         state.tripName = "";
//         state.tripDate = "";
//       }
//     },
//   },
// });

// export const { setTripName, setTripDate, addTrip } = tripSlice.actions;
// export default tripSlice.reducer;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Trip {
  name: string;
  date: string;
}

interface TripState {
  tripName: string;
  tripDate: string;
  trips: Trip[];
}

const initialState: TripState = {
  tripName: "",
  tripDate: "",
  trips: [],
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
    addTrip: (state) => {
      if (state.tripName && state.tripDate) {
        state.trips.push({ name: state.tripName, date: state.tripDate });
        state.tripName = "";
        state.tripDate = "";
      }
    },
    setTrips: (state, action: PayloadAction<Trip[]>) => {
      state.trips = action.payload;
    },
  },
});

export const { setTripName, setTripDate, addTrip, setTrips } = tripSlice.actions;
export default tripSlice.reducer;
