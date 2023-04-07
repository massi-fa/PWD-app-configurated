import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #A100FF;
  padding: 10px;
  width: 60%;
  margin: 50px auto;
`;

const ContainerFeedback = styled.div`
  border: 1px solid #A100FF;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const ContainerField = styled.div`
  margin: 20px;
  padding: 5px;
  width: 20%;
  border: 1px solid #A100FF;
  border-radius: 10px;
`;

const ContainerSuggestions = styled.div`
  margin: 20px;
  padding: 5px;
  width: 50%;
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
  font-size: 1rem;
  margin: 5px;
  text-align: center;
`;

const AllFeedback = ({ feedbacks }) => (
  <Container>
    {
      feedbacks.map((feedback) => (
        <ContainerFeedback>
          <ContainerField>
            <H1>Rating</H1>
            <H2>{feedback.rating}</H2>
          </ContainerField>
          <ContainerField>
            <H1>Selection</H1>
            <H2>{feedback.selection}</H2>
          </ContainerField>
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
