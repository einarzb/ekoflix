import React, { Fragment } from "react";
import styled from "styled-components";
import { BlackShadow, EkoPink, DarkBlue } from "../assets/theme";

const Playlist = ({ playlist }) => {
  let playlistItems = playlist.list.map(function(movie, i) {
    return (
      <Fragment>
        <Card key={i}>
          <Box src={movie.coverBg} />
          <Data>
            <MetaTags>
              {movie.meta.map((metaTag, i) => (
                <MetaTag key={i}>{metaTag}</MetaTag>
              ))}
            </MetaTags>
            <h1>{movie.title}</h1>
            <Description>{movie.description}</Description>
          </Data>
        </Card>
      </Fragment>
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
  & h2 {
    color: ${EkoPink};
    font-size: 1.2rem;
    margin-left: 2rem;
  }
`;

const PlaylistRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 1rem;
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
  & h1 {
    margin: 0 1rem;
    font-size: 1.5rem;
  }
  & p {
    font-size: 1rem;
    display:block;
    margin: 0.5rem;
    width: auto;
    white-space: normal;
    overflow-y: scroll;
  }
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    width: 100%;
    top: 2%
    padding: 2rem 0;
  }
`;

const Card = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  box-sizing: content-box;
  background-color: ${DarkBlue};
  height: 400px;
  transition: all 0.2s ease-in-out;
  margin: 0 0.3rem;
  -webkit-box-shadow: 10px 10px 21px -4px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 10px 10px 21px -4px rgba(0, 0, 0, 0.8);
  box-shadow: 10px 10px 21px -4px rgba(0, 0, 0, 0.8);
  &:hover {
    transform: scale(1.1);
    height: 400px;
    ${Data} {
      display: inline-flex;
    }
  }
`;

const Box = styled.img`
  width: 350px;
  background-size: cover;
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
