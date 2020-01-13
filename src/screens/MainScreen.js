import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DarkBlue } from "../assets/theme";

class MainScreen extends React.Component {
  render() {
    return (
      <Fragment>
        <Wrapper></Wrapper>
      </Fragment>
    );
  }
}

export default connect(null, null)(MainScreen);

const Wrapper = styled.div`
  background-color: ${DarkBlue};
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
`;
