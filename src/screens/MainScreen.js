import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { heroItemAction, playlistAction } from "../redux/actions/index";

import { Wrapper } from "../assets/theme";
import Hero from "../components/Hero";
import PlayListsSection from "../components/PlayListsSection";

class MainScreen extends React.Component {
  state = {
    heroItem: this.props.heroItem,
    playlists: this.props.playlists
  };
  render() {
    let { heroItem, playlists } = this.props;
    return (
      <Fragment>
        <Wrapper>
          <Hero heroItem={heroItem}></Hero>
          <PlayListsSection playlists={playlists}></PlayListsSection>
        </Wrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    heroItem: state.heroReducer.heroItem,
    playlists: state.playlistsReducer.playlists
  };
  return props;
};

const mapDispatchToProps = dispatch => ({
  heroItemRedux: heroItem => dispatch(heroItemAction(heroItem)),
  playlistRedux: playlists => dispatch(playlistAction(playlists))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
