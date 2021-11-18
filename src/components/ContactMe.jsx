import React from 'react';
import styled from 'styled-components/macro';
import ContactCard from './bits/ContactCard';
import ContactsCard from './bits/ContactsCard';

import contact from '../res/contact1.svg';

const Container = styled.div`

`;

const ContainerFirst = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  };
  @media only screen and (min-width: 1400px) {
    width: 1400px;
  };
  margin: auto;
  animation: backInLeft;
  animation-duration: 2s; /* don't forget to set a duration! */
`;
const ContainerSecond = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  };
  @media only screen and (min-width: 1400px) {
    width: 1400px;
  };
  margin: auto;
  padding-bottom: 100px;
  animation: backInRight;
  animation-duration: 2s; /* don't forget to set a duration! */
`;
const ContainerIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media only screen and (min-width: 900px) {
    width: 50%;
  };
`;

const Title = styled.h1`
  width: 75%;
  margin: auto;
  margin-bottom: 0;
  text-align: center;
  font-size: 4rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 3rem;
  };
  color: white;
`;

const Description = styled.h3`
  width: 75%;
  margin: 5px auto;
  text-align: center;
  font-size: 2rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 1.5rem;
  };
  color: white;
`;

const ContainerImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media only screen and (min-width: 900px) {
    width: 50%;
  };
`;

const Image = styled.img`
  width: 70%;
  max-width: 500px;
  margin: auto;
`;
const ContactMe = () => (
  <Container>
    <ContainerFirst>
      <ContainerIntro>
        <Title>Contact Me</Title>
        <Description>
          What are you waiting for?
          Contact me immediately.
          You can do it through the form or through the contacts you find at the bottom.
        </Description>
      </ContainerIntro>
      <ContainerImg>
        <Image src={contact} />
      </ContainerImg>
    </ContainerFirst>
    <ContainerSecond>
      <ContactsCard />
      <ContactCard />
    </ContainerSecond>
  </Container>
);

export default ContactMe;
