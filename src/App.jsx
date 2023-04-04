import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Header from './components/Header';
import Fast from './components/FAST/Fast';

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
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Fast />
  </Container>
);

export default App;
