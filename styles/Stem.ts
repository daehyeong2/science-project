import { motion } from "framer-motion";
import styled from "styled-components";

export const Stem = styled.div<{
  $idx?: number;
  $isRna?: boolean;
}>`
  position: relative;
  left: ${({ $idx }) =>
    $idx != undefined
      ? $idx > 1
        ? `${-923 + ($idx - 1) * 76.92 + 83.92}px`
        : `${-923 + $idx * 83.92}px`
      : 0};
  transition: left 0.3s ease-in-out;
`;

export const Bar = styled.div`
  background-color: black;
  width: 100%;
  height: 16px;
  border-radius: 8px;
`;

export const BaseList = styled.ul<{ $isRna?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isRna ? "repeat(20, 1fr)" : "repeat(12, 54px)"};
  gap: 23px;
  height: 80px;
  padding: 0 30px;
`;

export const Base = styled(motion.li)<{
  $backgroundColor: string;
  $type: string;
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-bottom-left-radius: ${({ $type }) => ($type == "rna" ? "12px" : 0)};
  border-bottom-right-radius: ${({ $type }) => ($type == "rna" ? "12px" : 0)};
  border-top-right-radius: ${({ $type }) => ($type == "dna" ? "12px" : 0)};
  border-top-left-radius: ${({ $type }) => ($type == "dna" ? "12px" : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: white;
  font-weight: bold;
  cursor: ${({ $type }) => ($type == "dna" ? "pointer" : "default")};
  transition: background-color 0.25s ease-in-out;
  ${(props) =>
    props.$type == "dna"
      ? `
  &:hover {
    border: 4px solid #3e3f5b;
    border-bottom: none;
  }
  `
      : ""}
`;

export const Group = styled.section<{ $isExist: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 54px);
  gap: 23px;
  ${(props) =>
    props.$isExist
      ? `
  &:hover {
    ${Base} {
      border: 4px solid #3e3f5b;
      border-top: none;
      cursor: pointer;
    }
    cursor: pointer;
  }
  `
      : ""}
`;
