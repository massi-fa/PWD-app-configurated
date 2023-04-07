import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components/macro';

import Fast from './components/FAST/Fast';
import AdminPage from './components/AdminPage';
import NavButton from './components/NavButton';

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
    <Router>
      <Routes>
        <Route
          path="/fast"
          element={(
            <>
              <NavButton path="/admin" text="Admin Page" />
              <Fast />
            </>
          )}
        />
        <Route
          path="/admin"
          element={(
            <>
              <NavButton path="/fast" text="Fasty Page" />
              <AdminPage />
            </>
        )}
        />
        <Route path="/" element={<Navigate to="/fast" />} />
      </Routes>
    </Router>
  </Container>
);

export default App;
