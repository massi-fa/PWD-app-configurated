import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  flex-direction: row;
  padding: 10px;
  background-color: #FF6B6B;
  position: sticky;
`;

const Text = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin: auto;
`;

const Info = () => (
  <Container>
    <Text>070402670 Lun/Ven 8:30-13:30 16:30-20 </Text>
  </Container>
);

export default Info;
