import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Transaction from '../bits/Transaction';

const Container = styled.div`
  border-radius: 15px 15px 0px 0px;
  background-color: rgba(82,222,154,0.10);
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  bottom: 4rem;
  padding-bottom: 20px;
  z-index: 0;
`;

const TransactionsBox = ({ data }) => (
  <Container>
    {(() => {
      if (data != null) {
        return (
          data.map((element) => (
            <Transaction type={element.type} name={element.name} value={element.value} key={element.key} />
          ))
        );
      }
      return null;
    })()}
  </Container>
);

TransactionsBox.propTypes = {
  data: PropTypes.node.isRequired,
};

export default TransactionsBox;

/* <Transaction type="income" name="Ninjabet" value="20$" />
   <Transaction type="" name="Spesa Conad" value="30$" />
   <Transaction type="income" name="Ninjabet" value="20$" /> */
