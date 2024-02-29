import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gptSlice",
  initialState: {
    visible: false,
  },
  reducers: {
    setVisible: (state, action) => {
      state.visible = !state.visible;
    },
  },
});

export const { setVisible } = GPTSlice.actions;
export default GPTSlice.reducer;
