import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { heroItemAction } from "../redux/actions/index";

import styled from "styled-components";
import { Wrapper } from "../assets/theme";
import Hero from "../components/Hero";

class MainScreen extends React.Component {
  state = {
    heroItem: this.props.heroItem
  };
  render() {
    let { heroItem } = this.props;
    console.log(heroItem);

    return (
      <Fragment>
        <Wrapper>
          <Hero heroItem={heroItem}></Hero>
        </Wrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    heroItem: state.heroReducer.heroItem
  };
  return props;
};

const mapDispatchToProps = dispatch => ({
  heroItemRedux: heroItem => dispatch(heroItemAction(heroItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
