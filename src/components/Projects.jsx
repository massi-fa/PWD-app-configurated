import React from 'react';
import styled from 'styled-components/macro';

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
    <ContainerProjects>
      {
        projects.map((element) => (
          <Card name={element.name} image={element.languages} description={element.description} key={element.id} />
        ))
      }
    </ContainerProjects>
  </Container>
);

export default Projecs;
