"use client";

import Dna from "@/components/Dna";
import * as S from "../styles/Home";
import Rna from "@/components/Rna";
import Controls from "@/components/Controls";

export default function Home() {
  return (
    <S.Screen>
      <S.Title>DNA에서 RNA로 유전 정보가 전사되는 과정을 알아보자</S.Title>
      <S.Container>
        <Rna />
        <Dna />
        <Controls />
      </S.Container>
    </S.Screen>
  );
}
