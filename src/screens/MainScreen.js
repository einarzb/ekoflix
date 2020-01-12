import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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
  background-color: #222831;
  margin-top: -1.1rem;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
