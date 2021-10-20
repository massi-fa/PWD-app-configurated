import React from 'react';
import styled from 'styled-components/macro';

import map from '../res/map.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    width: 75%;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 430px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
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
  @media only screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

const Content = styled.h2`
  text-align: center;
  width: 70%;
  margin: 20px auto;
  font-family: 'Rubik', sans-serif;
  @media only screen and (max-width: 900px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

const ContainerMap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 40%;
`;

const Map = styled.img`
  margin: auto;
  width: 20rem;
`;

const Whoam = () => (
  <Container>
    <ContainerTitle>
      <Title>Chi siamo</Title>
      <Line />
    </ContainerTitle>
    <ContainerGeneral>
      <ContainerDescription>
        <Content>Siamo l&apos;Auto Assistenza Moi e operiamo da 40 anni nel settore delle pratiche automobilistiche e navali. Non vediamo l&apos;ora di mettere a disposizione dei clienti la nostra esperienza decennale.</Content>
      </ContainerDescription>
      <ContainerMap>
        <Map src={map} />
      </ContainerMap>
    </ContainerGeneral>
  </Container>
);

export default Whoam;
