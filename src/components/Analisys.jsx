import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #A100FF;
  padding: 3px;
  margin: 50px auto;
  background-color: #A100FF;
`;
const H1 = styled.h1`
  font-size: 1rem;
  margin: 5px;
  text-align: center;
`;
const H2 = styled.h2`
  font-size: 0.8rem;
  margin: 5px;
  border-top: 1px solid #A100FF;
  text-align: center;
  padding-top: 3px;
`;
const ContainerField = styled.div`
  margin: 20px;
  padding: 5px;
  border: 1px solid #A100FF;
  border-radius: 10px;
  width: 7rem;
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
        <H1>Media</H1>
        <H1>Rating</H1>
        <H2>{Number(data.mediaR).toFixed(1)}</H2>
      </ContainerField>
      <ContainerField>
        <H1>Media</H1>
        <H1>Selection</H1>
        <H2>{Number(data.mediaS).toFixed(1)}</H2>
      </ContainerField>
    </Container>
  );
};

export default Analisys;
