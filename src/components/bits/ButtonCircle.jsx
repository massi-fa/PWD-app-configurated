import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  background-color: ${(props) => (props.bg === 'green' ? '#52de9a' : '#e76279')};
`;

const Logo = styled.img`
  height: 2rem;
  margin: auto;
`;

const ButtomCircle = ({ logo, bg }) => (
  <Container bg={bg}>
    <Logo src={logo} />
  </Container>
);

ButtomCircle.propTypes = {
  logo: PropTypes.node.isRequired,
  bg: PropTypes.string.isRequired,
};

export default ButtomCircle;
