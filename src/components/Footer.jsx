import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  };
`;

const H1 = styled.h1`
  font-size: 1rem;
  color: white;
  @media only screen and (max-width: 900px) {
    margin: auto;
  };
`;

const Footer = () => (
  <Container>
    <H1>Develop by Massimiliano Fadda</H1>
    <H1>© MassiFa</H1>
  </Container>
);

export default Footer;
