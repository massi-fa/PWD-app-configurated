import React from 'react';
import styled from 'styled-components/macro';

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
const Line = styled.span`
  height: 5px;
  width: 8rem;
  border: 1px;
  border-radius: 30px;
  background-color: #a43c3c;
  margin: auto;
`;
const Title = styled.h1`
  margin: 20px auto 5px auto;
  font-family: 'Rubik', sans-serif;
`;
const Content = styled.h2`
  text-align: center;
  width: 80%;
  margin:20px auto;
  font-family: 'Rubik', sans-serif;
`;

const Whoam = () => (
  <ContainerDescription>
    <Title>Chi siamo</Title>
    <Line />
    <Content>Siamo l&apos;Auto Assistenza Moi e operiamo da 40 anni nel settore delle pratiche automobilistiche e navali. Non vediamo l&apos;ora di mettere a disposizione dei clienti la nostra esperienza decennale.</Content>
  </ContainerDescription>
);

export default Whoam;
