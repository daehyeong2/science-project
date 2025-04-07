import { createSlice, PayloadAction } from "@reduxjs/toolkit";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const values = [
  {
    name: "A",
    color: "#67AE6E",
  },
  {
    name: "T",
    color: "#F7374F",
  },
  {
    name: "G",
    color: "#FF9B17",
  },
  {
    name: "C",
    color: "#1B56FD",
  },
];

interface InitialState {
  value: BaseState[];
}

export interface BaseState {
  name: string;
  color: string;
}

interface setState {
  idx: number;
  value: BaseState;
}

const initialState = {
  value: [...Array(12)].map(() => ({
    name: "A",
    color: "#67AE6E",
  })) as BaseState[],
} as InitialState;

export const base = createSlice({
  name: "base",
  initialState,
  reducers: {
    set: (State, action: PayloadAction<setState>) => {
      if (action.payload.idx == 0) {
        return {
          value: [
            action.payload.value,
            ...State.value.slice(action.payload.idx + 1),
          ],
        };
      } else if (action.payload.idx == 11) {
        return {
          value: [
            ...State.value.slice(0, action.payload.idx),
            action.payload.value,
          ],
        };
      }
      return {
        value: [
          ...State.value.slice(0, action.payload.idx),
          action.payload.value,
          ...State.value.slice(action.payload.idx + 1),
        ],
      };
    },
    random: () => {
      const randomArr = [];
      for (let i = 0; i < 12; i += 1) {
        randomArr.push(values[getRandomInt(4)]);
      }
      return {
        value: randomArr,
      };
    },
  },
});

export const { set, random } = base.actions;
export default base.reducer;
