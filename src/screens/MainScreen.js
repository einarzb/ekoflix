import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DarkBlue } from "../assets/theme";

class MainScreen extends React.Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <div style={{ height: "700px" }}></div>
          <div style={{ height: "700px" }}></div>
        </Wrapper>
      </Fragment>
    );
  }
}

export default connect(null, null)(MainScreen);

const Wrapper = styled.div`
  background-color: ${DarkBlue};
  display: block;
  width: 100vw;
  height: 100%;
  position: relative;
`;
