import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: nowPlayingMoviesReducer,
  },
});

export default appStore;
