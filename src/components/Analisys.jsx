import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #A100FF;
  padding: 10px;
  width: 60%;
  margin: 50px auto;
  background-color: #A100FF;
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
        <h1>Media Rating</h1>
        <h1>{Number(data.mediaR).toFixed(1)}</h1>
      </ContainerField>
      <ContainerField>
        <h1>Media Selection</h1>
        <h1>{Number(data.mediaS).toFixed(1)}</h1>
      </ContainerField>
    </Container>
  );
};

export default Analisys;
