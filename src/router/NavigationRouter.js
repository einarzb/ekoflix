import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import { asyncComponent } from "react-async-component";
import styled from "styled-components";

import { EkoGradient } from "../assets/theme";
import { EKO } from "../assets/svgIndex";

const Home = asyncComponent({
  resolve: () => import("../screens/MainScreen")
});

class NavigationRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Header>
          <NavUl>
            <Tab>
              <Link to="/">
                <img src={EKO} />
              </Link>
            </Tab>
          </NavUl>
        </Header>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Redirect from="*" to="/" />
        </Switch>

        <Footer>
          © 2020 Made with ❤️ by{" "}
          <a href="https://github.com/einarzb?tab=repositories" target="_blank">
            Einar
          </a>
        </Footer>
      </BrowserRouter>
    );
  }
}

export default NavigationRouter;

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  color: #ffffff;
  height: auto;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
  & a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const Header = styled.nav`
  background: ${EkoGradient};
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
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
  & img {
    width: 4rem;
    height: auto;
  }
`;
