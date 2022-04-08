import React from 'react';
import styled from 'styled-components/macro';

import ButtonCircle from './bits/ButtonCircle';

import home from '../res/homeIcon.svg';
import plus from '../res/plusIcon.svg';
import minus from '../res/minusIcon.svg';
import settings from '../res/settings.svg';

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

const Bottom = () => (
  <Container>
    <ButtonCircle logo={home} bg="green" />
    <ButtonCircle logo={plus} bg="green" />
    <ButtonCircle logo={minus} />
    <ButtonCircle logo={settings} bg="green" />
  </Container>
);

export default Bottom;
