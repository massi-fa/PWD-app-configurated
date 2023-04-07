import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

// import 'animate.css';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import valutations from './exterience.json';

import iconClose from '../../res/iconClose.png';
import iconSend from '../../res/iconSend.png';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 300px;
  };
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  border: 3px solid #A100FF;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  // animation: backInUp;
  // animation-duration: 2s;
`;

const ContainerExp = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerRadio = styled.div`
  display: flex;
  padding: 35px;
  // text-align: center;
`;

const ContainerSugg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #A100FF;
  width: 80%;
  height: 3rem;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  margin: 10px auto 10px auto;
`;

const H1 = styled.h1`
  font-size: 20px;
  justify-content: center;
  text-align: center;
`;

const ButtonClose = styled.button`
  display: flex;
  outline: none;
  background-color: transparent;
  border: none;
  margin: 10px 10px auto auto;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const Button = styled.button`
  display: flex;
  outline: none;
  background-color: transparent;
  border: none;
`;

const SendImg = styled.img`
  width: 50px;
  margin: auto;
`;

const Questions = ({ click }) => {
  const [valueR, setValueR] = useState(5);
  const [value, setValue] = useState(5);
  const [inputValue, setInputValue] = useState('');
  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    // do something with the value, like submitting a form
    console.log('TEST');
    console.log(valueR);
    console.log(value);
    console.log(inputValue);
    console.log('Fine TEST');
    // metti i dati
    const timestamp = new Date().toISOString();
    const data = {
      rating: valueR,
      selection: Number(value),
      text: inputValue,
      time: timestamp,
    };
    axios.post('/.netlify/functions/add_data', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setInputValue('');
    setValue(5);
    setValueR(5);
  };
  return (
    <Container>
      <ButtonClose onClick={click}>
        <Img src={iconClose} />
      </ButtonClose>
      <ContainerExp>
        <H1>How was our app?</H1>
        <Box
          sx={{
            '& > legend': { mt: 2 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            name="simple-controlled"
            value={valueR}
            onChange={(event, newValue) => {
              setValueR(Number(newValue));
              console.log(newValue);
            }}
            sx={{
              margin: '20px auto 0px auto',
            }}
          />
        </Box>
      </ContainerExp>
      <ContainerRadio>
        <FormControl>
          <H1>How was your experience?</H1>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {(valutations).map((question) => (
              <FormControlLabel value={question.numValue} key={question.key} control={<Radio color="secondary" />} label={question.value} />
            ))}
          </RadioGroup>
        </FormControl>
      </ContainerRadio>
      <ContainerSugg>
        <H1>Do you have any suggestions?</H1>
        <Input
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
          placeholder="Enter your suggestions here"
        />
      </ContainerSugg>
      <Button onClick={handleClick}>
        <SendImg src={iconSend} />
      </Button>
    </Container>
  );
};

Questions.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Questions;
