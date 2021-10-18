import React from 'react';
import styled from 'styled-components/macro';

import sfondo from '../res/home2.jpg';

const Container = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 45rem;
`;

const ContainerElement = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const TextAgency = styled.h1`
  margin: 55px auto;
  font-size: 10%;
  color: white;
`;

const Home = () => (
  <Container>
    <Image src={sfondo} />
    <ContainerElement>
      <TextAgency>Auto Assistenza Moi</TextAgency>
    </ContainerElement>
  </Container>
);

export default Home;
