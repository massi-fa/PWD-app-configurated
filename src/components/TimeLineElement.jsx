import React from 'react';
import styled from 'styled-components/macro';

import PropTypes from 'prop-types';

// https://codepen.io/FlorinPop17/pen/GLEPZy

const Container = styled.div`

`;

const Title = styled.h1`

`;

const Description = styled.h2`

`;

const Location = styled.h2`

`;

const TimeLineElement = ({ data }) => (
  <Container>
    <Title>{data.title}</Title>
    <Description>{data.description}</Description>
    <Location>{data.location}</Location>
  </Container>
);

TimeLineElement.propTypes = {
  data: PropTypes.node.isRequired,
};

export default TimeLineElement;
