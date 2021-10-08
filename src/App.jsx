import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Header from './components/Header';
import Home from './components/Home';
import Info from './components/Info';

import sfondo from './res/AnimatedShape.svg';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.25s;
  }
  body {
    overflow: hidden;
    height: 100%;
  } 
`;

const Container = styled.div`
  height: 100vh;
  background-image: url(${sfondo});
  background-repeat: no-repeat;
  background-size: cover;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Info />
    <Header />
    <Home />
  </Container>
);

export default App;
