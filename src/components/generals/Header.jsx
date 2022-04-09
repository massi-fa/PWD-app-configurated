import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import logo from '../../res/icona.png';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 0rem;
  //border-bottom: 1px solid #E2E8F0;
  height: 5rem;
`;

const Title = styled.h1`
  margin: auto 0px auto 20px;
  color: #1d2a30;
  font-size: 2.5rem;
`;
const Logo = styled.img`
  width: 6rem;
`;

const Header = ({ name }) => (
  <Container>
    <Title>{name}</Title>
    <Logo src={logo} />
  </Container>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
