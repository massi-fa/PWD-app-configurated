import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

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

const DateText = styled.a`
  margin: 5px;
  font-weight: bold;
  font-size: 1.8rem;
  color: ${(props) => (props.type === 'income' ? '#52de9a' : '#e76279')};
  text-align: center;
`;

const ContainerTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContainerDataPicker = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.condition ? 'flex' : 'none')};
  background-color: rgba(255,255,255, 0.6);
`;
const ConstainerBackground = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  border: 2px solid;
  border-color: ${(props) => (props.type === 'income' ? '#52de9a' : '#e76279')};
`;

const TextDataPicker = styled.h1`
  font-size: 1rem;
  margin: 5px auto;
  justify-content: center;
  text-align: center;
`;

const useClickOutside = (ref, callback, state) => {
  const handleClick = (e) => {
    if (state) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

const FormMoney = ({ type, text }) => {
  const Money = '200$';
  const [pickerState, setPickerState] = useState(false);
  const [date, setDate] = useState(new Date());
  const clickRef = useRef();
  const changeState = () => {
    setPickerState(!pickerState);
  };
  useClickOutside(clickRef, changeState, pickerState);
  let footer = <TextDataPicker>Please pick a day.</TextDataPicker>;
  if (date) {
    const textDate = 'You picked ';
    const res = format(date, 'PP');
    footer = (
      <TextDataPicker>
        {textDate}
        {res}
      </TextDataPicker>
    );
  }
  return (
    <Container>
      <Text>{text}</Text>
      <ContainerForm type={type}>
        <h1>{Money}</h1>
      </ContainerForm>
      <ContainerTime>
        <Text>On</Text>
        <DateText type={type} onClick={changeState}>{format(date, 'PP')}</DateText>
      </ContainerTime>
      <ContainerDataPicker condition={pickerState}>
        <ConstainerBackground ref={clickRef} type={type}>
          <DayPicker
            mode="single"
            dateFormat="MM-DD-YYYY"
            selected={date}
            onSelect={setDate}
            footer={footer}
          />
        </ConstainerBackground>
      </ContainerDataPicker>
    </Container>
  );
};

FormMoney.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormMoney;
