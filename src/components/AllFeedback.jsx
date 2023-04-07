import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #A100FF;
  padding: 10px;
  margin: 50px auto;
  background-color: #A100FF;
`;

const ContainerFeedback = styled.div`
  border: 1px solid #A100FF;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: white;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerField = styled.div`
  margin: auto 5px auto 5px;
  padding: 5px;
  border: 1px solid #A100FF;
  border-radius: 10px;
`;

const ContainerSuggestions = styled.div`
  margin: 10px auto;
  padding: 5px;
  border: 1px solid #A100FF;
  border-radius: 10px;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  border-bottom: 1px solid #A100FF;
  margin: 5px;
  text-align: center;
`;
const H2 = styled.h1`
  font-size: 1.2rem;
  margin: 5px;
  text-align: center;
`;

const AllFeedback = ({ feedbacks }) => (
  <Container>
    {
      feedbacks.map((feedback) => (
        <ContainerFeedback key={feedback.rating * Math.random()}>
          <Row>
            <ContainerField>
              <H1>Rating</H1>
              <H2>{feedback.rating}</H2>
            </ContainerField>
            <ContainerField>
              <H1>Selection</H1>
              <H2>{feedback.selection}</H2>
            </ContainerField>
          </Row>
          <ContainerSuggestions>
            <H1>Suggestion</H1>
            <H2>{feedback.text}</H2>
          </ContainerSuggestions>
        </ContainerFeedback>
      ))
    }
  </Container>
);

AllFeedback.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllFeedback;
