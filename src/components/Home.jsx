import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 50px auto;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
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
  text-align: left;
  font-size: 4rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 3rem;
  };
`;

const Description = styled.h3`
  width: 75%;
  margin: 5px auto;
  text-align: left;
  font-size: 2rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 1.5rem;
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

const Home = ({
  title,
  description,
  image,
}) => (
  <Container>
    <ContainerIntro>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ContainerIntro>
    <ContainerImg>
      <Image src={image} />
    </ContainerImg>
  </Container>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default Home;
