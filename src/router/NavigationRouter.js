import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import { asyncComponent } from "react-async-component";
import styled from "styled-components";

import { EkoGradient, BlackShadow } from "../assets/theme";
import { EKO, PLUS } from "../assets/svgIndex";

const Home = asyncComponent({
  resolve: () => import("../screens/MainScreen")
});

const MyList = asyncComponent({
  resolve: () => import("../screens/MyListScreen")
});

class NavigationRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    if (window.scrollY === 0) {
      this.setState({ isScrolled: false });
    } else if (window.scrollY > 50) {
      this.setState({ isScrolled: true });
    }
  };

  render() {
    let { isScrolled } = this.state;
    return (
      <BrowserRouter>
        <Header style={{ background: isScrolled ? EkoGradient : BlackShadow }}>
          <NavUl>
            <Tab>
              <Link to="/">
                <Logo src={EKO} />
              </Link>
            </Tab>
            <Tab>
              <Link to="/">TV shows</Link>
            </Tab>
            <Tab>
              <Link to="/">movies</Link>
            </Tab>
            <Tab>
              <Link to="/">recently added</Link>
            </Tab>
            <Tab>
              <Link to="/mylist">
                my list <img src={PLUS} width="10" height="10" />
              </Link>
            </Tab>
          </NavUl>
        </Header>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/mylist" component={MyList}></Route>

          <Redirect from="*" to="/" />
        </Switch>

        <Footer>
          © 2020 code with ❤️ by{" "}
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
  height: 3.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transition-timing-function: ease-in;
  transition: all 1s;
`;

const NavUl = styled.ul`
  font-size: 15px;
  padding: 5px;
  margin-left: 1rem;
  margin-top: 0.3rem;
  display: inline-flex;
  flex-direction: row;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 45vw;
  @media only screen and (max-width: 60em) {
    margin-left: 0;
    & img {
      display: block;
    }
  }
`;

const Logo = styled.img`
  width: 4rem;
  height: auto;
`;

const Tab = styled.li`
  list-style-type: none;
  text-align: center;
  width: auto;
  margin: 0 10px;
  color: #ffffff;
  & a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #ffffff;
    }
  }
  @media only screen and (max-width: 60em) {
    display: none;
    &:first-child {
      display: block;
      margin: 5px;
    }
  }
`;
