import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  padding: 20px;
`;

const Text = styled.h1`
  margin: 5px;
  font-size: 1.8rem;
  color: ${(props) => (props.type === 'income' ? '#52de9a' : '#e76279')};
  text-align: center;
`;

const Tags = ({ type }) => (
  <Container>
    <Text type={type}>Tags</Text>
  </Container>
);

Tags.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Tags;
