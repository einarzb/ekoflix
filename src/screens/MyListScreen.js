import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Wrapper } from "../assets/theme";

class MyListScreen extends React.Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <h2>My List</h2>
        </Wrapper>
      </Fragment>
    );
  }
}

export default connect(null, null)(MyListScreen);
