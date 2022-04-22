import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Toastify from 'toastify-js';
import firebase from 'firebase/compat';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import db from '../../services/firestore';

import 'react-day-picker/dist/style.css';
import 'toastify-js/src/toastify.css';

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

const Input = styled.input`
  width: 8rem;
  height: 4rem;
  font-size: 1.8rem;
  text-align: center;
  margin: auto;
  outline: none;
  border: none;
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

const ButtonSend = styled.button`
  margin: 10px auto;
  width: 6rem;
  height: 3rem;
  border-radius: 15px;
  border: 2px solid;
  border-color: ${(props) => (props.type === 'income' ? '#52de9a' : '#e76279')};
  background: ${(props) => (props.type === 'income' ? 'rgba(82, 222, 154, 0.2)' : 'rgba(231, 98, 121, 0.2)')};
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
  const [money, setMoney] = useState('');
  const [pickerState, setPickerState] = useState(false);
  const [date, setDate] = useState(new Date());
  const clickRef = useRef();
  const changeState = () => {
    setPickerState(!pickerState);
  };
  useClickOutside(clickRef, changeState, pickerState);
  const onClick = () => {
    if (money !== '') {
      const moneyValue = parseFloat(money.replace(',', '.'));
      console.log(moneyValue);
      const newObj = {
        name: 'nuovo',
        type: type.toString(),
        value: moneyValue,
        date: firebase.firestore.Timestamp.fromDate(date),
        id: Math.random().toString(36).substr(2, 9),
      };
      console.log(newObj);
      db.collection('All').add(newObj);
      Toastify({
        text: 'Send Completed',
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#52de9a',
        stopOnFocus: true,
        onClick: () => {},
      }).showToast();
    } else {
      Toastify({
        text: 'Please enter a value',
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#e76279',
        stopOnFocus: true,
        onClick: () => {},
      }).showToast();
    }
    setMoney('');
  };

  let footer = <TextDataPicker>Please pick a day.</TextDataPicker>;
  if (date) {
    const textDate = 'You picked ';
    const res = format(date, 'P');
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
        <Input
          type="text"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          placeholder="200$"
        />
      </ContainerForm>
      <ContainerTime>
        <Text>On</Text>
        <DateText type={type} onClick={changeState}>{format(date, 'PP')}</DateText>
      </ContainerTime>
      <ButtonSend type={type} onClick={onClick}>
        <DateText type={type}>Send</DateText>
      </ButtonSend>
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
