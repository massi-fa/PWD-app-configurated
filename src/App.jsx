import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Whoam from './components/Whoam';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100%;
  } 
`;

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Home />
    <Whoam />
    <Service />
  </Container>
);

export default App;
