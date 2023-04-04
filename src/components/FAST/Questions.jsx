import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import valutations from './exterience.json';

import icon from '../../res/iconClose.png';

const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  border: 3px solid #A100FF;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const ContainerRadio = styled.div`
  display: flex;
  padding: 35px;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 20px;
  justify-content: center;
`;

const ButtonClose = styled.button`
  display: flex;
  outline: none;
  background-color: transparent;
  border: none;
  margin: 10px 10px auto auto;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Questions = ({ click }) => {
  const [value, setValue] = useState(5);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <ButtonClose onClick={click}>
        <Img src={icon} />
      </ButtonClose>
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
              <FormControlLabel value={question.key} control={<Radio color="secondary" />} label={question.value} />
            ))}
          </RadioGroup>
        </FormControl>
      </ContainerRadio>
    </Container>
  );
};

Questions.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Questions;
