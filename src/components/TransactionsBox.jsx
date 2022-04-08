import React from 'react';
import styled from 'styled-components/macro';

import Transaction from './bits/Transaction';

const Container = styled.div`
  border-radius: 15px 15px 0px 0px;
  background-color: rgba(82,222,154,0.10);
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  bottom: 4rem;
  padding-bottom: 20px;
  z-index: 0;
`;

const TransactionsBox = () => (
  <Container>
    <Transaction type="income" name="Ninjabet" value="20$" />
    <Transaction type="" name="Spesa Conad" value="30$" />
    <Transaction type="income" name="Ninjabet" value="20$" />
  </Container>
);

export default TransactionsBox;
