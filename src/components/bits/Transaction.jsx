import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import greenArrow from '../../res/greenArrowIcon.svg';
import redArrow from '../../res/redArrowIcon.svg';

const Container = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;
  background-color: #ffff;
  width: 70%;
  margin: 10px auto 10px auto;
  border: 1px solid;
  border-color: ${(props) => (props.type === 'income' ? '#52de9a' : '#e76279')};
`;

const ContainerLogo = styled.div`
  border-radius: 15px;
  background-color: ${(props) => (props.type === 'income' ? 'rgba(82,222,154,0.3)' : 'rgba(231,98,121,0.3);')};
  height: 3rem;
  width: 3rem;
  display: flex;
  margin: auto 5px auto 5px;
`;

const Logo = styled.img`
  height: 2rem;
  margin: auto;
  transform: ${(props) => (props.type === 'income' ? 'rotate(90deg)' : 'rotate(-90deg)')};
`;

const Text = styled.h1`
  margin: ${(props) => (props.name === 'name' ? 'auto auto auto auto' : 'auto 0px auto auto')};
  font-size: 1.5rem;
  color: ${(props) => (props.type === 'income' ? '#52de9a' : '#e76279')};
  text-align: center;
`;

const Transaction = ({ type, name, value }) => (
  <Container type={type}>
    <ContainerLogo type={type}>
      {
        type === 'income' ? <Logo src={greenArrow} type={type} /> : <Logo src={redArrow} type={type} />
      }
    </ContainerLogo>
    <Text type={type} name="name">
      {name}
    </Text>
    <Text type={type}>
      {value}
    </Text>
  </Container>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Transaction;
