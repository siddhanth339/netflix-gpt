import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./movieSlice";
import gptSliceReducer from "./GPTSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: nowPlayingMoviesReducer,
    gptSlice: gptSliceReducer,
  },
});

export default appStore;
