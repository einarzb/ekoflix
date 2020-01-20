import React, { Fragment } from "react";
import styled from "styled-components";

const Playlist = ({ playlist }) => {
  let playlistItems = playlist.list.map(function(movie, i) {
    return (
      <Fragment>
        <Card key={i}>
          <Box src={movie.coverBg} />
          <Data>
            <h1>{movie.title}</h1>
            <Description>{movie.description}</Description>
            <MetaTags>
              {movie.meta.map((metaTag, i) => (
                <MetaTag key={i}>{metaTag}</MetaTag>
              ))}
            </MetaTags>
          </Data>
        </Card>
      </Fragment>
    );
  });

  return (
    <PlaylistWrapper>
      {" "}
      <h2>{playlist.type} </h2>
      <PlaylistRow>{playlistItems}</PlaylistRow>
    </PlaylistWrapper>
  );
};

export default Playlist;

const PlaylistWrapper = styled.div`
  z-index: 999;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border: 1px solid blue;
  & h2 {
    margin-left: 2rem;
  }
`;
const PlaylistRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  z-index: 5;
  border: 2px solid red;
`;

const Box = styled.img`
  width: 200px;
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

  & p {
    margin: 0.5rem 0;
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
  font-size: 1rem;
  justify-content: space-between;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 1rem;
`;

const MetaTag = styled.div`
  display: inline-flex;
  &:after {
    content: "|";
    padding-left: 0.5rem;
  }
  &:last-child:after {
    content: "";
  }
  &: hover;
`;
