import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ContainerForm = styled.div`
  display: flex;
  margin: 10px auto 10px auto;
  width: 10rem;
  height: 5rem;
  border: 5px solid;
  border-color: ${(props) => (props.type === 'income' ? '#52de9a' : '#e76279')};
  border-radius: 15px;
  justify-content: center;
`;

const Text = styled.h1`
  margin:5px;
  font-size: 1.8rem;
  color: #1d2a30;
  text-align: center;
`;

const Date = styled.h1`
  margin: 5px;
  font-size: 1.8rem;
  color: ${(props) => (props.type === 'income' ? '#52de9a' : '#e76279')};
  text-align: center;
`;

const ContainerTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FormMoney = ({ type, text }) => {
  const Money = '200$';
  return (
    <Container>
      <Text>{text}</Text>
      <ContainerForm type={type}>
        <h1>{Money}</h1>
      </ContainerForm>
      <ContainerTime>
        <Text>On</Text>
        <Date type={type}>10-04-2022</Date>
      </ContainerTime>
    </Container>
  );
};

FormMoney.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormMoney;
