import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import { asyncComponent } from "react-async-component";

//STYLING
import styled from "styled-components";
import { EkoGradient, BlackShadow } from "../assets/theme";
import { EKO, PLUS, SEARCH } from "../assets/svgIndex";

//LAZY COMPONENTS
const Home = asyncComponent({
  resolve: () => import("../screens/MainScreen")
});

const MyList = asyncComponent({
  resolve: () => import("../screens/MyListScreen")
});

class NavigationRouter extends Component {
  state = {
    isScrolling: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if (window.scrollY === 0) {
      this.setState({ isScrolling: false });
    } else if (window.scrollY > 50) {
      this.setState({ isScrolling: true });
    }
  };

  render() {
    let { isScrolling } = this.state;
    return (
      <BrowserRouter>
        <Header style={{ background: isScrolling ? EkoGradient : BlackShadow }}>
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
                my list <img src={PLUS} width="10" />
              </Link>
            </Tab>
            <Tab>
              <Search src={SEARCH} />
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

//INLINE STYLING
const Header = styled.nav`
  background-color: transparent;
  height: auto;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition-timing-function: ease-in;
  transition: all 1s;
`;

const NavUl = styled.ul`
  font-size: 15px;
  padding: 0;
  display: flex;
  color: #ffffff;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  margin: 0.5rem;
  width: auto;
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    margin-left: 0;
    & img {
      display: block;
      margin-left: 0.5rem;
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
  @media screen and (max-aspect-ratio: 4/3) and (max-width: 480px) and (min-width: 0) {
    display: none;
    &:first-child {
      display: block;
      margin: 5px;
    }
  }
`;

const Search = styled.img`
  width: 1rem;
  float: right;
`;
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
