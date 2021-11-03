import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import git from '../res/github.svg';
import linkedin from '../res/linkedin.svg';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 50px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  };
  @media only screen and (min-width: 1400px) {
    width: 1400px;
    margin: auto;
  };
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

const Change = styled.a`
  color: #9f3645;
`;

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const Link = styled.a`

`;

const SocialIcon = styled.img`
  height: 3rem;
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

const Home = ({
  title,
  image,
}) => (
  <Container>
    <ContainerIntro>
      <Title>{title}</Title>
      <Description>
        I&apos;m
        <Change> Massimiliano Fadda</Change>
        .
        <br />
        I&apos;m a programmer and a computer science student. The only goal is to keep learning
      </Description>
      <ContainerIcon>
        <Link href="https://github.com/massi-fa">
          <SocialIcon src={git} />
        </Link>
        <Link href="https://www.linkedin.com/in/massimiliano-fadda-535bb7205/">
          <SocialIcon src={linkedin} />
        </Link>
      </ContainerIcon>
    </ContainerIntro>
    <ContainerImg>
      <Image src={image} />
    </ContainerImg>
  </Container>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default Home;
