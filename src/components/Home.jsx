import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  height: 25rem;
`;

const SubContainer = styled.div`
  margin-top: 50px;
  width: 50%;
`;

const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  width: 50%;
  margin: auto;
`;

const H3 = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const Home = () => (
  <Container>
    <SubContainer>
      <H1>Federico Moi</H1>
      <H2>40 anni di esperienza nel settore delle pratiche auto e nautiche</H2>
      <H3>Chiama subito il numero 070402670</H3>
    </SubContainer>
  </Container>
);

export default Home;
