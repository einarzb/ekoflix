import React from "react";
import styled from "styled-components";

const Hero = ({ heroItem }) => {
  console.log(heroItem);
  let HeroCard = heroItem.map(function(item, i) {
    return (
      <Card key={i} style={{ backgroundImage: `url(${item.coverBg})` }}>
        <Data>
          <h1>{item.title}</h1>
          <Description>{item.description}</Description>
          <MetaTags>{item.meta}</MetaTags>
        </Data>

        <DataRow></DataRow>
      </Card>
    );
  });

  return <HeroWrapper>{HeroCard}</HeroWrapper>;
};

export default Hero;

const Card = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  top: 3.5rem;
  left: 0;
  bottom: 0;
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
`;

const Data = styled.div`
  display: block;
  color: #ffffff;
  padding: 2rem;
  font-size: 1rem;
  width: 44vw;
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
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    width: 100%;
    padding: 2rem 0;
  }
`;

const HeroWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: end;
  margin-top: 1rem;
  padding: 0rem;
`;

const DataRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.3rem;
  padding: 8px;
  align-items: center;
  width: 100px;
`;

const Description = styled.p`
  line-height: 1.5;
`;
const MetaTags = styled.span``;
