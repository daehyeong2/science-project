"use client";

import { useAppSelector } from "@/app/hooks";
import * as S from "../styles/Stem";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { set } from "@/redux/slices/base-slice";
import { convertInterface } from "./Rna";

const changeOrder: convertInterface = {
  A: {
    name: "T",
    color: "#F7374F",
  },
  T: {
    name: "G",
    color: "#FF9B17",
  },
  G: {
    name: "C",
    color: "#1B56FD",
  },
  C: {
    name: "A",
    color: "#67AE6E",
  },
};

const Dna = () => {
  const values = useAppSelector((state) => state.baseReducer.value);
  const dispatch = useDispatch<AppDispatch>();
  const onChange = (idx: number) => {
    const next = changeOrder[values[idx].name];
    dispatch(set({ idx, value: next }));
  };
  return (
    <S.Stem>
      <S.BaseList>
        {values.map((base, idx) => (
          <S.Base
            onClick={() => onChange(idx)}
            $backgroundColor={base.color}
            key={idx}
            $type="dna"
          >
            {base.name}
          </S.Base>
        ))}
      </S.BaseList>
      <S.Bar />
    </S.Stem>
  );
};

export default Dna;
