import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';

import timeLineElements from '../utils/timeline';

const TimelineMUI = () => (
  <Timeline position="alternate">
    {
      timeLineElements.map((element) => (
        <TimelineItem key={element.id}>
          <TimelineOppositeContent color="white">
            {element.date}
            <br />
            {element.location}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" color="white">
              {element.title}
            </Typography>
            <Typography color="white">{element.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))
    }
  </Timeline>
);

export default TimelineMUI;
