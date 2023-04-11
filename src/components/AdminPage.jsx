import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AllFeedback from './AllFeedback';
import Analisys from './Analisys';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Loading = styled.h1`
  margin: auto;
  font-size: 1.5rem;
`;
const AdminPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/.netlify/functions/get_data')
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // if data [] show loading
  return (
    <Container>
      <Analisys />
      {
        data.length === 0
          ? <Loading>Loading...</Loading>
          : <AllFeedback feedbacks={data} />
      }
    </Container>
  );
};

export default AdminPage;
