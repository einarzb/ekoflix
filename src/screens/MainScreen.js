import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { heroItemAction, playlistAction } from "../redux/actions/index";

import { Wrapper } from "../assets/theme";
import Hero from "../components/Hero";
import PlayList from "../components/Playlist";

class MainScreen extends React.Component {
  state = {
    heroItem: this.props.heroItem,
    playlist: this.props.playlist
  };
  render() {
    let { heroItem, playlist } = this.props;
    return (
      <Fragment>
        <Wrapper>
          <Hero heroItem={heroItem}></Hero>
          {/**TODO: create a component that accepts playlists  */}
          <PlayList playlist={playlist}></PlayList>
          <PlayList playlist={playlist}></PlayList>
        </Wrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    heroItem: state.heroReducer.heroItem,
    playlist: state.playlistsReducer.playlist
  };
  return props;
};

const mapDispatchToProps = dispatch => ({
  heroItemRedux: heroItem => dispatch(heroItemAction(heroItem)),
  playlistRedux: playlist => dispatch(playlistAction(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
