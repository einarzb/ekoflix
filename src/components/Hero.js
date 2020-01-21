import React from "react";
import styled from "styled-components";
import { EkoGradient, EkoPink } from "../assets/theme";
import { PLUS } from "../assets/svgIndex";

const Hero = ({ heroItem }) => {
  let HeroCard = heroItem.map(function(item, i) {
    return (
      <Card key={i}>
        <HeroWrap>
          <img src={item.coverBg} />
        </HeroWrap>
        <Gradient></Gradient>
        <Data>
          <h1>{item.title}</h1>
          <Description>{item.description}</Description>
          <MetaTags>
            {item.meta.map((metaTag, i) => (
              <MetaTag key={i}>{metaTag}</MetaTag>
            ))}
          </MetaTags>
          <CtaWrap>
            <a tabIndex="0" role="link" href="/">
              play
            </a>
            <a tabIndex="0" role="link" href="/">
              add to my list{" "}
              <img src={PLUS} width="10" style={{ marginLeft: "10px" }} />
            </a>
            <a tabIndex="0" role="link" href="/">
              more info
            </a>
          </CtaWrap>
        </Data>
      </Card>
    );
  });

  return <HeroWrapper>{HeroCard}</HeroWrapper>;
};

export default Hero;

const HeroWrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 7;
  height: 70vh;
  display: block;
`;

const HeroWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  & img {
    position: absolute;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
    z-index: 5;
    @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
      min-height: 289px;
    }
  }
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  z-index: 5;
  height: auto;
`;

const Gradient = styled.div`
  background: -webkit-linear-gradient(
    -13deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: -moz-
    oldlinear-gradient(-13deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 85%);
  background: -o-linear-gradient(
    -13deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    85deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  top: 0;
  right: 26.09%;
  left: 0;
  bottom: 0;
  opacity: 1;
  -webkit-transition: opacity 500ms;
  -o-transition: opacity 500ms;
  -moz-transition: opacity 500ms;
  transition: opacity 500ms;
  z-index: 2;
  height: 106vh;
`;

const Data = styled.div`
  position: absolute;
  top: 10%;
  left: 4%;
  bottom: 0%;
  z-index: 10;
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 50%;
   height: 100%;
  & p {
    margin: 0;
  }
  & h1:after {
    content: "";
    background: ${EkoPink};
    height: 10%;
    width: 120px;
    display:block;
    margin: 1rem 0 0 0;
  }
}
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    width: 100%;
    top: 2%
    padding: 2rem 0;
  }
`;

const Description = styled.p`
  line-height: 1.5;
`;
const MetaTags = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  justify-content: space-between;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 0.5rem;
  width: fit-content;
  margin: 1rem 0;
`;

const MetaTag = styled.div`
  &:after {
    content: " | ";
    padding: 0 0.5rem;
  }
  &:last-child:after {
    content: "";
  }
`;

const CtaWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  z-index: 10;
  width: auto;
  position: absolute;
  top: 50%;
  left: 0%;
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    bottom: 67%;
  }
  & a {
    position: relative;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.4);
    font-weight: bold;
    text-transform: uppercase;
    background-color: rgba(51, 51, 51, 0.4);
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0 0.3rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: ${EkoGradient};
      transform: scale(1.1);
    }
    @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
      padding: 0 0.3rem;
      font-size: 0.75rem;
      line-height: 2;
      height: auto;
    }
  }
`;
