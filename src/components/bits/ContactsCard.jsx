import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  border: 1px solid;
  border-radius: 10px;
  border-color: white;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px auto 20px auto;
  @media only screen and (min-width: 500px) {
    width: 400px;
  };
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Type = styled.h1`
  margin: 5px auto 5px auto;
  font-size: 2rem;
`;

const Data = styled.h1`
  font-size: 1rem;
`;

const ContactsCard = () => (
  <Container>
    <Type>Mail</Type>
    <Data>massifadda99@gmail.com</Data>
    <Type>Phone</Type>
    <Data>+39 3426910820</Data>
  </Container>
);

export default ContactsCard;
