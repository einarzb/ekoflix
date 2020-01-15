import styled from "styled-components";

export const EkoGradient =
  "linear-gradient(90deg, rgba(151, 10, 151, 0.3) 0%, rgba(116, 32, 185, 0.8) 100%)";

export const BlackShadow =
  "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%,rgba(0, 0, 0, 0))";

export const DarkBlue = "#00112b";

export const Wrapper = styled.div`
  background-color: ${DarkBlue};
  display: block;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  padding-top: 3.5rem;
  padding-left: 3rem;
  color: #ffffff;
`;
