import React from 'react';
import styled from 'styled-components/macro';

import sfondo from '../res/home2.jpg';
import phone from '../res/phone.svg';

const Container = styled.div`
  width: 100%;
  height: 35rem;
  background-image: url(${sfondo});
  // background-size: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 680px) {
    height: 30rem;
  }
  @media only screen and (max-width: 410px) {
    height: 22rem;
  }
`;

const TextAgency = styled.h1`
  font-size: 60px;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 0;
  color: white;
  font-family: 'Rubik', sans-serif;
  @media only screen and (max-width: 680px) {
    font-size: 40px;
    margin-top: 50px;
  }
  @media only screen and (max-width: 410px) {
    font-size: 30px;
    margin-top: 50px;
  }
`;

const TextPromo = styled.h2`
  font-size: 50px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 0;
  color: white;
  font-family: 'Rubik', sans-serif;
  @media only screen and (max-width: 680px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 410px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  margin: auto;
  border-radius: 20px;
  background-color: #2686EE;
  display: flex;
  flex-direction: row;
  width: 17rem;
  padding: 15px;
  @media only screen and (max-width: 680px) {
    width: 15rem;
  }
  @media only screen and (max-width: 410px) {
    width: 12rem;
  }
`;

const ButtonLogo = styled.img`
  height: 40px;
  margin:auto 5px auto 5px;
  @media only screen and (max-width: 680px) {
    height: 30px;
  }
  @media only screen and (max-width: 410px) {
    height: 20px;
  }
`;

const ButtonText = styled.h1`
  color: white;
  font-size: 40px;
  @media only screen and (max-width: 680px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 410px) {
    font-size: 20px;
  }
  margin:auto 5px auto 5px;
`;

const Home = () => (
  <Container>
    <TextAgency>Auto Assistenza Moi</TextAgency>
    <TextPromo>Da 40 anni semplifichiamo</TextPromo>
    <TextPromo>le tue pratiche</TextPromo>
    <Button>
      <ButtonLogo src={phone} />
      <ButtonText>Chiamaci</ButtonText>
    </Button>
  </Container>
);

export default Home;
