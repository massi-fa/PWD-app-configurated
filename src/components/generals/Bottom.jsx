import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ButtonCircle from '../bits/ButtonCircle';

import home from '../../res/homeIcon.svg';
import plus from '../../res/plusIcon.svg';
import minus from '../../res/minusIcon.svg';
import settings from '../../res/settings.svg';

const Container = styled.div`
  border-top: 2px solid;
  border-color: rgba(29,42,48,0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background-color: #ffff;
`;

const Bottom = () => {
  const [page, setPage] = useState(false);

  const handleClick = ({ pag }) => {
    setPage(pag);
    console.log(page);
  };

  return (
    <Container>
      <ButtonCircle logo={home} bg="1" func={handleClick} page="Home" />
      <ButtonCircle logo={plus} bg="2" func={handleClick} page="Plus" />
      <ButtonCircle logo={minus} bg="3" func={handleClick} page="Minus" />
      <ButtonCircle logo={settings} bg="4" func={handleClick} page="Settings" />
    </Container>
  );
};

export default Bottom;
