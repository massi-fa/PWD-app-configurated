import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Projecs from './components/Projects';
import Footer from './components/Footer';

import homeText from './utils/home';
import homeImg from './res/homeImg.svg';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    transition: all 0.25s;
  }
  body {
    overflow: auto;
    height: 100vh;
  } 
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #28292d;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/Projects">
          <Header />
          <Projecs />
        </Route>
        <Route path="/Me">
          <Header />
          <Home title={homeText.title} description={homeText.description} image={homeImg} />
          <Education />
        </Route>
        <Route path="/">
          <Redirect to="/Me" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </Container>
);

export default App;
