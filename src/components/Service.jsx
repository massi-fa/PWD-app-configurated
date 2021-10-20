import React from 'react';
import styled from 'styled-components/macro';
import Card from './bit/Card';

import car from '../res/auto.svg';

const Container = styled.div`

`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Line = styled.span`
  height: 5px;
  width: 10rem;
  border: 1px;
  border-radius: 30px;
  background-color: #a43c3c;
  margin: auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 20px auto 5px auto;
  font-family: 'Rubik', sans-serif;
  font-size: 3rem;
  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
`;

const Service = () => (
  <Container>
    <ContainerTitle>
      <Title>Servizi Principali</Title>
      <Line />
    </ContainerTitle>
    <ContainerCard>
      <Card icon={car} desc="Passaggi di Proprietà" />
      <Card icon={car} desc="Bolli" />
      <Card icon={car} desc="Reimmatricolazioni" />
      <Card icon={car} desc="Rinnovi Patente" />
    </ContainerCard>
  </Container>
);

export default Service;
