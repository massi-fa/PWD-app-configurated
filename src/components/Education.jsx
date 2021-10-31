import React from 'react';
import styled from 'styled-components/macro';

import image from '../res/certification.svg';

import TimelineMUI from './TimelineMUI';

const Wrapper = styled.div`
  width: 100%;
  background-color: #28292d;;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 50px;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
  };
  @media only screen and (min-width: 1400px) {
    width: 1400px;
    margin: auto;
  };
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

const ContainerTimeLine = styled.div`
  margin: auto;
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

const Education = () => (
  <Wrapper>
    <Container>
      <ContainerImg>
        <Image src={image} />
      </ContainerImg>
      <ContainerTimeLine>
        <Title>Education</Title>
        <TimelineMUI />
      </ContainerTimeLine>
    </Container>
  </Wrapper>
);

export default Education;
