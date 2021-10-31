import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';

import homeText from './utils/home';
import homeImg from './res/homeImg.svg';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    transition: all 0.25s;
  }
  body {
    overflow: hidden;
    height: 100%;
    overflow: auto;
    scrollbar-width: thin;
  } 
`;

const Container = styled.div`

`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Home title={homeText.title} description={homeText.description} image={homeImg} />
    <Education />
  </Container>
);

export default App;
