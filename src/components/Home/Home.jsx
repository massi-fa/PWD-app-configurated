import React from 'react';
import styled from 'styled-components/macro';

import BudgetRecap from './BudgetRecap';
import TransactionsBox from './TransactionsBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => (
  <Container>
    <BudgetRecap />
    <TransactionsBox />
  </Container>
);

export default Home;
