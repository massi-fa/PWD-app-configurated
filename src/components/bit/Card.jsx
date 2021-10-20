import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    height: 16rem;
    width: 14rem;
    border: 3px solid;
    border-color: #ab6c3b;
    border-radius: 10px;
  }
  @media only screen and (min-width: 900px) {
    width: 50%;
  }
  padding: 10px;
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 8rem;
  margin: auto;
`;

const Description = styled.h1`
  margin: auto;
  text-align: center;
  font-size: 1.5rem;
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const Card = ({ icon, desc }) => (
  <Container>
    <Icon src={icon} />
    <Description>{desc}</Description>
  </Container>
);

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
};

export default Card;
