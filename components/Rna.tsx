"use client";

import { useAppSelector } from "@/app/hooks";
import * as S from "../styles/Stem";
import { BaseState } from "@/redux/slices/base-slice";

export interface convertInterface {
  [key: string]: BaseState;
}

const DnaToRna: convertInterface = {
  A: {
    name: "U",
    color: "#FEBA17",
  },
  T: {
    name: "A",
    color: "#67AE6E",
  },
  G: {
    name: "C",
    color: "#1B56FD",
  },
  C: {
    name: "G",
    color: "#FF9B17",
  },
};

const Rna = () => {
  const values = useAppSelector((state) => state.baseReducer.value);
  const idx = useAppSelector((state) => state.idxReducer.value);
  return (
    <S.Stem $idx={idx}>
      <S.Bar />
      <S.BaseList $isRna={true}>
        {[...Array(4)].map((_, group_idx) => {
          const current_group_idx = idx - 12 + group_idx * 3;
          return (
            <S.Group
              $isExist={current_group_idx >= 0 && current_group_idx < 12}
              key={group_idx}
            >
              {[...Array(3)].map((_, item_idx) => {
                const map_idx = group_idx * 3 + item_idx;
                const current_idx = idx - 12 + map_idx;
                if (current_idx >= 12) {
                  return (
                    <S.Base $backgroundColor="gray" key={map_idx} $type="rna">
                      ?
                    </S.Base>
                  );
                }
                if (current_idx < 0) {
                  return (
                    <S.Base $backgroundColor="gray" key={map_idx} $type="rna">
                      ?
                    </S.Base>
                  );
                }
                return (
                  <S.Base
                    $backgroundColor={DnaToRna[values[current_idx].name].color}
                    key={map_idx}
                    $type="rna"
                  >
                    {DnaToRna[values[current_idx].name].name}
                  </S.Base>
                );
              })}
            </S.Group>
          );
        })}
      </S.BaseList>
    </S.Stem>
  );
};

export default Rna;
