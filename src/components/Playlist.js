import React, { Fragment } from "react";
import styled from "styled-components";

const Playlist = ({ playlist }) => {
  let PlaylistRow = playlist.list.map(function(movie, i) {
    return (
      <Fragment>
        <Card key={i}>
          <Box src={movie.coverBg} />
          <Gradient></Gradient>
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
      <h2>{playlist.playlistType} </h2>
      {PlaylistRow}
    </PlaylistWrapper>
  );
};

export default Playlist;

const PlaylistWrapper = styled.div`
  margin: 8vw 0;
  border: 3px solid red;
  z-index: 999;
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: row;
  z-index: 5;
`;

const Box = styled.img`
  width: 200px;
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
  height: auto;
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
  @media only screen and (max-width: 60em) {
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
