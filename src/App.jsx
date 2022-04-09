import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Header from './components/generals/Header';
import Bottom from './components/generals/Bottom';
import Home from './components/Home/Home';

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
  
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Header name="Home" />
              <Home />
            </>
          }
        />
        <Route
          path="/Plus"
          element={
            <>
              <Header name="Income" />
            </>
          }
        />
        <Route
          path="/Minus"
          element={
            <>
              <Header name="Expense" />
            </>
          }
        />
        <Route
          path="/Settings"
          element={
            <>
              <Header name="Settings" />
            </>
          }
        />
        <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>
      <Bottom />
    </Router>
  </Container>
);

export default App;
