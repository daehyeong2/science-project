"use client";

import Dna from "@/components/Dna";
import * as S from "../styles/Home";
import Rna from "@/components/Rna";
import Controls from "@/components/Controls";
import Result from "@/components/Result";

export default function Home() {
  return (
    <S.Screen>
      <S.Title>각 코돈은 어떤 아미노산을 지정할까?</S.Title>
      <S.Container>
        <Result />
        <Rna />
        <Dna />
        <Controls />
      </S.Container>
    </S.Screen>
  );
}
