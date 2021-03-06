import React from "react";
import styled from "styled-components";

import { BlackShadow, EkoPink, DarkBlue } from "../assets/theme";
import { PLAY } from "../assets/svgIndex";

const Playlist = ({ playlist }) => {
  let playlistItems = playlist.list.map(function(movie, i) {
    return (
      <Card key={i}>
        <a href={movie.videoLink}>
          <Box src={movie.coverBg} />
          <Play src={PLAY} />
        </a>
        <h1>{movie.title}</h1>
        <Data>
          <MetaTags>
            {movie.meta.map((metaTag, i) => (
              <MetaTag key={i}>{metaTag}</MetaTag>
            ))}
          </MetaTags>
          <Description>{movie.description}</Description>
        </Data>
      </Card>
    );
  });

  return (
    <PlaylistWrapper>
      {" "}
      <h2>{playlist.type} </h2>
      <PlaylistRow>
        <Slider>{playlistItems}</Slider>
      </PlaylistRow>
    </PlaylistWrapper>
  );
};

export default Playlist;

const PlaylistWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  background: ${BlackShadow};
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  & h2 {
    color: ${EkoPink};
    font-size: 1.2rem;
    margin-left: 2rem;
  }
  &:last-child {
    margin-bottom: 5rem;
  }
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    &:last-child {
      margin-bottom: 3rem;
    }
  }
`;

const PlaylistRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Slider = styled.div`
  width: 100%;
  overflow-y: scroll;
  white-space: nowrap;
`;

const Data = styled.div`
  display:none;
  position: relative;
  justify-content: start;
  flex-direction: column;
  width: 300px;
  margin: 0px auto;
  & p {
    font-size: 1rem;
    display:block;
    margin: 0.5rem;
    width: auto;
    white-space: normal;
    overflow: scroll;
    text-overflow:ellipsis;
    height: 100px;
  }
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    display:inline-flex;
    width: 100%;
    top: 2%
    padding: 0 0;
    & p {
      font-size: 0.9rem;
    }
  }
`;

const Play = styled.img`
  cursor: pointer;

  display: none;
  position: absolute;
  width: 46px;
  opacity: 0.7;
  top: 22%;
  left: 43%;
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    display: block;
    top: 18%;
  }
`;

const Card = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  box-sizing: content-box;
  background-color: ${DarkBlue};
  margin: 0 0.3rem;
  -webkit-box-shadow: 10px 10px 21px -4px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 10px 10px 21px -4px rgba(0, 0, 0, 0.8);
  box-shadow: 10px 10px 21px -4px rgba(0, 0, 0, 0.8);

  & h1 {
    margin: 0 0rem 0.5rem 2rem;
    font-size: 1.5rem;
  }
  &:hover {
    transform: scale(1.1);
    z-index: 99;
    height: 400px;
    ${Data} {
      display: inline-flex;
    }
    ${Play} {
      display: block;
    }
  }
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    width: 80%;
    & h1 {
      margin: 0.5rem;
      font-size: 1.1rem;
    }
    &:hover {
      transform: scale(1);
    }
  }
`;

const Box = styled.img`
  cursor: pointer;
  width: 350px;
  background-size: cover;
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    width: 100%;
  }
`;

const Description = styled.p`
  line-height: 1.5;
`;
const MetaTags = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 1rem;
  justify-content: space-between;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 0.5rem;
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    font-size: 0.9rem;
  }
`;

const MetaTag = styled.div`
  &:after {
    content: " | ";
    padding: 0 1rem;
  }
  &:last-child {
    color: ${EkoPink};
  }
  &:last-child:after {
    content: "";
  }
`;
