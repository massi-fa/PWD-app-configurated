import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #A100FF;
  padding: 10px;
  margin: 50px auto;
  background-color: #A100FF;
`;
const ContainerDrop = styled.div`
  display: flex;
  justify-content: center;
  min-width: 8rem;
  margin: auto;
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
  font-size: 1rem;
  border-bottom: 1px solid #A100FF;
  margin: 5px;
  text-align: center;
`;
const H2 = styled.h2`
  font-size: 0.8rem;
  margin: 5px;
  text-align: center;
  padding-top: 3px;
`;

const problems = [
  'Bug',
  'Crash',
  'Performance',
  'Other',
];

const AllFeedback = ({ feedbacks }) => {
  const [topic, setTopic] = useState('');
  const handleChangeProb = (event) => {
    setTopic(event.target.value);
  };
  const [filtered, setFiltered] = useState(feedbacks);
  useEffect(() => {
    if (topic !== '') {
      setFiltered(feedbacks.filter((feedback) => feedback.problem === topic));
      console.log(feedbacks.filter((feedback) => feedback.problem === topic));
    } else {
      setFiltered(feedbacks);
    }
  }, [topic]);
  useEffect(() => {
    setFiltered(feedbacks);
  }, []);
  return (
    <Container>
      <ContainerDrop>
        <FormControl sx={{ m: 1, minWidth: 60 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Problem</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={topic}
            onChange={handleChangeProb}
            autoWidth
            label="Problem"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              problems.map((problem) => (
                <MenuItem value={problem} key={problem}>{problem}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </ContainerDrop>
      {
        filtered.map((feedback) => (
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
};

AllFeedback.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllFeedback;
