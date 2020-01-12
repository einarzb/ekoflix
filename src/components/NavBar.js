import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { EkoGradient } from "../assets/theme";

class NavBar extends Component {
  render() {
    return (
      <Bar>
        <NavUl>
          <Tab>
            <Link to="/">HOME</Link>
          </Tab>
        </NavUl>
      </Bar>
    );
  }
}

export default connect(null, null)(NavBar);

const Bar = styled.nav`
  background: ${EkoGradient};
  max-height: 55px;
  width: 100%;
`;

const NavUl = styled.ul`
  padding: 5px;
  font-size: 17px;
  margin-left: 1rem;
  margin-top: 0rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Tab = styled.li`
  list-style-type: none;
  display: inline-flex;
  flex-direction: row;
  width: 50px;
  margin: 10px;
  justify-content: space-between;
  color: #ffffff;
  text-align: center;
  @media (max-width: 768px) {
    width: 40px;
  }
  & a {
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    width: 100%;
  }
  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 30px;
    color: #ffffff;
    font-family: "Arial";
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  & img {
    width: 15px;
    height: auto;
  }
  & span {
    margin: 0px 8px;
    font-size: 15px;
    border: 1px solid #ffffff;
    padding: 5px;
  }
`;
