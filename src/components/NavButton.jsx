import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: #4285F4;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

const NavButton = ({ path, text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return <Button onClick={handleClick}>{text}</Button>;
};

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavButton;
