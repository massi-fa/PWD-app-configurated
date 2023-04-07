import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AllFeedback from './AllFeedback';

const Container = styled.div`

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

  return (
    <Container>
      <AllFeedback feedbacks={data} />
    </Container>
  );
};

export default AdminPage;
