import React from 'react';
import styled from 'styled-components/macro';
import 'animate.css';

import projects from '../utils/projects';
import image from '../res/projects.svg';
import Card from './bits/Card';

const Container = styled.div`

`;

const ContainerIntro = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 50px;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: space-between;
  };
  @media only screen and (min-width: 1400px) {
    width: 1400px;
    margin: auto;
  };
  padding-bottom: 50px;
  animation: backInLeft;
  animation-duration: 2s; /* don't forget to set a duration! */
`;

const ContainerImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media only screen and (min-width: 900px) {
    width: 50%;
  };
  margin: 40px auto;
`;

const Image = styled.img`
  width: 80%;
  max-width: 500px;
  margin: auto;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 900px) {
    width: 50%;
  };
  margin: auto;
`;

const Title = styled.h1`
  width: 75%;
  margin: 0px auto 20px auto;
  text-align: center;
  font-size: 4rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 3rem;
  };
  color: white;
`;

const Description = styled.h3`
  width: 80%;
  margin: 0px auto auto auto;
  text-align: center;
  font-size: 2rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 1.5rem;
  };
  color: white;
`;

const ContainerProjects = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1350px;
  margin: auto;
`;

const SubTitle = styled.h1`
  margin: 20px auto 20px auto;
  text-align: center;
  color: white;
  font-size: 2.5rem;
  
  animation: bounceInDown;
  animation-duration: 2s; /* don't forget to set a duration! */
`;

const Line = styled.hr`
    height: 0.5rem;
    width: 8rem;
    border-radius: 25px;
    background-color: white;
    
  animation: bounceInDown;
  animation-duration: 2s; /* don't forget to set a duration! */
`;

const Projecs = () => (
  <Container>
    <ContainerIntro>
      <ContainerImg>
        <Image src={image} />
      </ContainerImg>
      <ContainerText>
        <Title>Projects</Title>
        <Description>
          My projects makes use of vast variety of latest technology tools.
          <br />
          They are the realization of my desire to learn.
        </Description>
      </ContainerText>
    </ContainerIntro>
    <SubTitle>My last Projects</SubTitle>
    <Line />
    <ContainerProjects>
      {
        projects.map((element) => (
          <Card key={element.id} name={element.name} logos={element.languages} description={element.description} link={element.link} />
        ))
      }
    </ContainerProjects>
  </Container>
);

export default Projecs;
