import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

import Header from './components/Header';
import Home from './components/Home';

import homeText from './utils/home';
import homeImg from './res/homeImg.svg';
import TimelineMUI from './components/TimelineMUI';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    transition: all 0.25s;
  }
  body {
    overflow: hidden;
    height: 100%;
  } 
`;

const Container = styled.div`
  height: 100%;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Home title={homeText.title} description={homeText.description} image={homeImg} />
    <TimelineMUI />
  </Container>
);

export default App;
