import React from 'react';
import styled from 'styled-components/macro';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Container = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  outline: none;
  border: none;
  &:nth-child(1) {
    background-color: ${(props) => (props.current === '/Home' ? '#52de9a' : 'transparent')};
  }
  &:nth-child(2) {
    background-color: ${(props) => (props.current === '/Plus' ? '#52de9a' : 'transparent')};
  }
  &:nth-child(3) {
    background-color: ${(props) => (props.current === '/Minus' ? '#e76279' : 'transparent')};
  }
  &:nth-child(4) {
    background-color: ${(props) => (props.current === '/Settings' ? '#007169' : 'transparent')};
  }
  
`;

const Logo = styled.img`
  height: 2rem;
  margin: auto;
`;

const ButtomCircle = ({
  logo,
  bg,
  page,
}) => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const handleClick = () => {
    window.navigator.vibrate(200); // vibrate for 200ms
    window.navigator.vibrate([100, 30, 100, 30, 100, 30, 200, 30, 200]); // Vibrate 'SOS' in Morse.
    navigate(`/${page}`);
  };
  return (
    <Container
      id={bg}
      current={path}
      onClick={handleClick}
    >
      <Logo
        src={logo}
        id={bg}
        current={path}
      />
    </Container>
  );
};

ButtomCircle.propTypes = {
  logo: PropTypes.node.isRequired,
  bg: PropTypes.node.isRequired,
  page: PropTypes.string.isRequired,
};

export default ButtomCircle;
