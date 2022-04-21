import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Container = styled.div`
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

const Text = styled.h1`
  font-size: 1rem;
  margin: 5px auto;
  justify-content: center;
  text-align: center;
`;

const useClickOutside = (ref, callback, callback2, state, selectedDate) => {
  const handleClick = (e) => {
    if (state) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log(selectedDate);
        const newData = new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
        console.log(newData);
        callback2('ciao');
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

const DataPicker = ({
  activateFun,
  newdateFun,
  state,
  type,
}) => {
  const [selected, setSelected] = useState(new Date());
  const clickRef = useRef();
  useClickOutside(clickRef, activateFun, newdateFun, state, selected);
  // const correctTimeStamp = new Date();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = (
      <Text>
        You picked
        {format(selected, 'PP')}
        .
      </Text>
    );
  }
  return (
    <Container condition={state}>
      <ConstainerBackground ref={clickRef} type={type}>
        <DayPicker
          mode="single"
          dateFormat="MM-DD-YYYY"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </ConstainerBackground>
    </Container>
  );
};

DataPicker.propTypes = {
  activateFun: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  newdateFun: PropTypes.func.isRequired,
};

export default DataPicker;

// Im using https://react-day-picker.js.org/
