import React from 'react';
import styled from 'styled-components/macro';

import logo from '../res/logo.png';
import whatsapp from '../res/whatsapp.svg';
import facebook from '../res/facebook.svg';
import instagram from '../res/instagram.svg';

const Container = styled.div`
  width: 100%;
  background-color: rgba(250, 224, 224, 0.56);
`;

const SubContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
`;

const Logo = styled.img`
  margin: auto;
  margin-left: 25px;
  max-width: 10rem;
  float: left;
`;

const ContainerButton = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const Button = styled.div`
  border: 2px solid;
  border-color: #991d18;
  border-radius: 15px;
  width: 5rem;
  padding: 13px;
  margin: auto;
  text-align: center;
  color: #991d18;
`;

const ContactContainer = styled.div`
  display: flex;
`;

const ContactImg = styled.img`
  height: 2rem;
  margin: auto;
  margin-right: 5px;
  margin-left: 5px;
`;

const Header = () => (
  <Container>
    <SubContainer>
      <Logo src={logo} />
      <ContainerButton>
        <Button>
          Chi Siamo
        </Button>
        <Button>
          Servizi
        </Button>
        <Button>
          Contatti
        </Button>
      </ContainerButton>
      <ContactContainer>
        <ContactImg src={whatsapp} />
        <ContactImg src={instagram} />
        <ContactImg src={facebook} />
      </ContactContainer>
    </SubContainer>
  </Container>
);

export default Header;
