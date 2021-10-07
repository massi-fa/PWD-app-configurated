import React from 'react';
import styled from 'styled-components/macro';

import sfondo from '../res/maggiolinosfondo1.jpg';

const Container = styled.div`
  background-image: url(${sfondo}) ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 20rem;
`;

const Text = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin: auto;
`;

const FirstLook = () => (
  <Container>
    <Text>Pratiche auto Moi</Text>
  </Container>
);

export default FirstLook;
