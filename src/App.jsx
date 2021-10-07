import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import FirstLook from './components/FirstLook';
import Info from './components/Info';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
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
    <Info />
    <FirstLook />
  </Container>
);

export default App;
