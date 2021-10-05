import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

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

const Text = styled.h1`

`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Text>Ciao</Text>
  </Container>
);

export default App;
