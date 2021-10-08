import React from 'react';
import styled from 'styled-components/macro';

import phone from '../res/phone.svg';
import calendar from '../res/calendar.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #e12d2b;
  position: sticky;
`;

const Text = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin: auto;
  margin-left: 3px;
`;

const Logo = styled.img`
  height: 1rem;
  margin: auto;
  margin-right: 3px;
`;

const Info = () => (
  <Container>
    <Logo src={phone} />
    <Text>070402670</Text>
    <Logo src={calendar} />
    <Text>Lun/Ven 8:30-13:30 16:30-20 </Text>
  </Container>
);

export default Info;
