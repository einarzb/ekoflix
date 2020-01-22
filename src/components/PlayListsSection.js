import React, { Fragment } from "react";
import styled from "styled-components";
import Playlist from "./Playlist";
import { BlackShadow, EkoPink } from "../assets/theme";

const PlaylistsSection = ({ playlists }) => {
  let playlistItems = playlists.map(function(playlist, i) {
    return <Playlist key={i} playlist={playlist}></Playlist>;
  });
  return <PlaylistWrapper>{playlistItems}</PlaylistWrapper>;
};

export default PlaylistsSection;

const PlaylistWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  background: ${BlackShadow};
  height: 100%;
  width: 99%;
  overflow-y: scroll;
  & h2 {
    color: ${EkoPink};
    font-size: 1.2rem;
    margin-left: 2rem;
  }
`;
