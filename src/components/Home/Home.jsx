import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import db from '../../services/firestore';

import BudgetRecap from './BudgetRecap';
import TransactionsBox from './TransactionsBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [data, setData] = useState([]);
  const res = [];
  useEffect(() => {
    db.collection('All').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          res.push(doc.data());
        });
        setData(res);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, []);
  console.log(data);
  return (
    <Container>
      <BudgetRecap />
      <TransactionsBox data={data} />
    </Container>
  );
};

export default Home;
