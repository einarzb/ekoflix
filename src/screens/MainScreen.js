import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Wrapper } from "../assets/theme";

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
