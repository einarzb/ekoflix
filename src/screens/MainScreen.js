import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DarkBlue } from "../assets/style";

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
  margin-top: -1.1rem;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
