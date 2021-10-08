import React from 'react';
import styled from 'styled-components/macro';

import sfondo from '../res/maggiolinosfondo3.jpg';
import logo from '../res/logo.png';
import carAnimated from '../res/animatedAuto.svg';

const Container = styled.div`
  //background-image: url(${sfondo}) ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ContainerLogo = styled.div`
  width: 45%;
  padding: 10px;
  float: left;
`;

const Logo = styled.img`
  margin: auto;
 max-width: 10rem;
  float: left;
`;

const FirstLook = () => (
  <Container>
    <ContainerLogo>
      <Logo src={logo} />
    </ContainerLogo>
    <ContainerLogo>
      <Logo src={carAnimated} />
    </ContainerLogo>
  </Container>
);

export default FirstLook;
