import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    value: ResultState;
}

type ResultState = String;

const initialState = {
    value: "",
} as InitialState;

export const result = createSlice({
    name: "idx",
    initialState,
    reducers: {
        setResult: (state, action: PayloadAction<ResultState>) => {
          return {
              value: action.payload,
          }
        },
    },
});

export const { setResult } = result.actions;
export default result.reducer;
