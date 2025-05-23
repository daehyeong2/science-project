"use client"

import { useAppSelector } from "@/app/hooks";
import * as S from "@/styles/Result";

interface convertInterface {
    [key: string]: string;
}

const BaseToAminoAcid: convertInterface = {
    UUU: "Phe(페닐알라닌)",
    UUC: "Phe(페닐알라닌)",
    UUA: "Leu(류신)",
    UUG: "Leu(류신)",
    UCU: "Ser(세린)",
    UCC: "Ser(세린)",
    UCA: "Ser(세린)",
    UCG: "Ser(세린)",
    UAU: "Tyr(타이로신)",
    UAC: "Tyr(타이로신)",
    UAA: "Stop(종결 코돈)",
    UAG: "Stop(종결 코돈)",
    UGU: "Cys(시스테인)",
    UGC: "Cys(시스테인)",
    UGA: "Stop(종결 코돈)",
    UGG: "Trp(트립토판)",
    CUU: "Leu(류신)",
    CUC: "Leu(류신)",
    CUA: "Leu(류신)",
    CUG: "Leu(류신)",
    CCU: "Pro(프롤린)",
    CCC: "Pro(프롤린)",
    CCA: "Pro(프롤린)",
    CCG: "Pro(프롤린)",
    CAU: "His(히스티딘)",
    CAC: "His(히스티딘)",
    CAA: "Gln(글루타민)",
    CAG: "Gln(글루타민)",
    CGU: "Arg(아르기닌)",
    CGC: "Arg(아르기닌)",
    CGA: "Arg(아르기닌)",
    CGG: "Arg(아르기닌)",
    AUU: "Ile(아이소류신)",
    AUC: "Ile(아이소류신)",
    AUA: "Ile(아이소류신)",
    AUG: "Met(메티오닌)",
    ACU: "Thr(트레오닌)",
    ACC: "Thr(트레오닌)",
    ACA: "Thr(트레오닌)",
    ACG: "Thr(트레오닌)",
    AAU: "Asn(아스파라진)",
    AAC: "Asn(아스파라진)",
    AAA: "Lys(라이신)",
    AAG: "Lys(라이신)",
    AGU: "Ser(세린)",
    AGC: "Ser(세린)",
    AGA: "Arg(아르기닌)",
    AGG: "Arg(아르기닌)",
    GUU: "Val(발린)",
    GUC: "Val(발린)",
    GUA: "Val(발린)",
    GUG: "Val(발린)",
    GCU: "Ala(알라닌)",
    GCC: "Ala(알라닌)",
    GCA: "Ala(알라닌)",
    GCG: "Ala(알라닌)",
    GAU: "Asp(아스파트산)",
    GAC: "Asp(아스파트산)",
    GAA: "Glu(글루탐산)",
    GAG: "Glu(글루탐산)",
    GGU: "Gly(글라신)",
    GGC: "Gly(글라신)",
    GGA: "Gly(글라신)",
    GGG: "Gly(글라신)",
}

const Result = () => {
    const value = useAppSelector((state) => state.resultReducer.value) as string;
    return <S.Container>
        <S.Codon>
            <S.CodonTitle>현재 선택된 코돈: {value}</S.CodonTitle>
            <S.BaseList>
                {[...Array(3)].map((_, idx) =>
                    <S.Base key={idx}>{value[idx]}</S.Base>
                )}
            </S.BaseList>
        </S.Codon>
        <S.Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
        </S.Arrow>
        <S.AminoAcid>
            {BaseToAminoAcid[value] ?? "OOO"}
        </S.AminoAcid>
    </S.Container>
}

export default Result;