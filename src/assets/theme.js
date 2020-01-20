import styled from "styled-components";

export const EkoGradient =
  "linear-gradient(90deg, rgba(151, 10, 151, 0.3) 0%, rgba(116, 32, 185, 0.8) 100%)";

export const BlackShadow =
  "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%,rgba(0, 0, 0, 0))";

export const DarkBlue = "#00112b";

export const Wrapper = styled.div`
  background-color: ${DarkBlue};
  width: 100vw;
  height: auto;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 3.5rem;
  padding-left: 0;
  color: #ffffff;
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    width: 100%;
  }
`;
