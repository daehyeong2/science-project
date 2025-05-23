import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
`

export const Codon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CodonTitle = styled.h2`
    text-align: center;
`

export const BaseList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const Base = styled.li`
    width: 50px;
    height: 70px;
    border-radius: 10px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
`;

export const Arrow = styled.svg`
    width: 40px;
    margin-top: 20px;
`;

export const AminoAcid = styled.div`
    display: flex;
    align-items: center;
    font-size: 36px;
    margin-top: 30px;
`;