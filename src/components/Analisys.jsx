import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #A100FF;
  padding: 10px;
  margin: 50px auto;
  background-color: #A100FF;
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  border-bottom: 1px solid #A100FF;
  margin: 5px;
  text-align: center;
`;
const ContainerField = styled.div`
  margin: 20px;
  padding: 5px;
  width: 40%;
  border: 1px solid #A100FF;
  border-radius: 10px;
  background-color: white;
  text-align: center;
`;

const Analisys = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/.netlify/functions/get_analisys')
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <Container>
      <ContainerField>
        <H1>Media Rating</H1>
        <H1>{Number(data.mediaR).toFixed(1)}</H1>
      </ContainerField>
      <ContainerField>
        <H1>Media Selection</H1>
        <H1>{Number(data.mediaS).toFixed(1)}</H1>
      </ContainerField>
    </Container>
  );
};

export default Analisys;
