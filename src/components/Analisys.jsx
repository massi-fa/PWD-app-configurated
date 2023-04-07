import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #A100FF;
  padding: 10px;
  width: 60%;
  margin: 50px auto;
`;

const ContainerField = styled.div`
  margin: 20px;
  padding: 5px;
  width: 40%;
  border: 1px solid #A100FF;
  border-radius: 10px;
`;

const Analisys = ({ feedbacks }) => {
  console.log(feedbacks);
  const mediaRating = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0) / feedbacks.length;
  console.log(mediaRating);
  const mediaSelection = feedbacks.reduce((acc, feedback) => acc + feedback.selection, 0) / feedbacks.length;
  console.log(mediaSelection);
  return (
    <Container>
      <ContainerField>
        <h1>Media Rating</h1>
        <h1>{mediaRating}</h1>
      </ContainerField>
      <ContainerField>
        <h1>Media Selection</h1>
        <h1>{mediaSelection}</h1>
      </ContainerField>
    </Container>
  );
};

Analisys.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Analisys;
