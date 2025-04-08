import styled from "styled-components";

export const Screen = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  text-align: center;
  background-color: black;
  color: white;
`;
