import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  justify-content:  center;
`;
const Text = styled.h1`
  margin: auto 5px auto 5px;
  font-size: 1.5rem;
  color: ${(props) => (props.color === '1d2a30' ? '#1d2a30' : '#52de9a')};
  text-align: center;
`;
const BalanceBox = styled.div`
  display: flex;
  margin: auto;
  width: 15rem;
  height: 5rem;
  border: 5px solid;
  border-color: #1d2a30;
  border-radius: 15px;
`;

const BalanceText = styled.h1`
  margin: auto;
  font-size: 2.5rem;
  color: #1d2a30;
  text-align: center;
`;

const BudgetRecap = () => (
  <Container>
    <ContainerText>
      <Text color="1d2a30">Budget on</Text>
      <Text>[04-08-2022]</Text>
    </ContainerText>
    <BalanceBox>
      <BalanceText>2000$</BalanceText>
    </BalanceBox>
  </Container>
);

export default BudgetRecap;
