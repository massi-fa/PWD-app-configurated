import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 15rem;
  height: 7.5rem;
  border: 1px solid;
  border-color: white;
  display: flex;
`;

const Name = styled.h1`
  font-size: 2rem;
`;

const Image = styled.img`
  height: 2rem;
  margin: auto;
`;
const Description = styled.h2`
  font-size: 1.5rem;
  margin: auto;
`;

const Card = ({ name, image, description }) => (
  <Container>
    <Name>{name}</Name>
    {
      image.map((element) => (
        <Image src={element} key={element.id} />
      ))
    }
    <Description>{description}</Description>
  </Container>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
