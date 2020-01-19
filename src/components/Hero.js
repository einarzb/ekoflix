import React from "react";
import styled from "styled-components";
import { EkoGradient } from "../assets/theme";
import { PLUS } from "../assets/svgIndex";

const Hero = ({ heroItem }) => {
  console.log(heroItem);
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
          <MetaTags>um</MetaTags>
        </Data>
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
      </Card>
    );
  });

  return <HeroWrapper>{HeroCard}</HeroWrapper>;
};

export default Hero;

const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  }
`;
const Card = styled.div`
  /*
  display: inline-flex;

  background-size: cover;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  filter: alpha(opacity=100);
  -webkit-transition: opacity 400ms cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
  -o-transition: opacity 400ms cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
  -moz-transition: opacity 400ms cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
  transition: opacity 400ms cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
  */
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
  z-index: 0;
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
  width: 36%;
  @media only screen and (max-width: 60em) {
    width: 100%;
    top: 2%
    padding: 2rem 0;
  }
`;

const Description = styled.p`
  line-height: 1.5;
`;
const MetaTags = styled.span``;

const CtaWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 0rem 0rem;
  z-index: 10;
  & a {
    position: relative;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.4);
    font-weight: bold;
    text-transform: uppercase;
    background-color: rgba(51, 51, 51, 0.4);
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 2rem;
    &:hover {
      background: ${EkoGradient};
    }
  }
`;
