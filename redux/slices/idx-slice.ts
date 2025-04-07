import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  value: IdxState;
}

type IdxState = number;

const initialState = {
  value: 0,
} as InitialState;

export const idx = createSlice({
  name: "idx",
  initialState,
  reducers: {
    next: (State) => {
      if (State.value == 24) return { value: State.value };
      return {
        value: State.value + 3,
      };
    },
    prev: (State) => {
      if (State.value == 0) return { value: State.value };
      return {
        value: State.value - 3,
      };
    },
  },
});

export const { next, prev } = idx.actions;
export default idx.reducer;
