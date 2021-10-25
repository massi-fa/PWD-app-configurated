import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import timeLineElements from '../utils/timeline';

const TimeLine = () => (
  <VerticalTimeline>
    {
      timeLineElements.map((element) => (
        <VerticalTimelineElement
          key={element.id}
          date={element.date}
          dateClassName="date"
        >
          <h3 className="vertical-timeline-element-title">
            {element.title}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {element.location}
          </h5>
          <p id="description">{element.description}</p>
        </VerticalTimelineElement>
      ))
    }
  </VerticalTimeline>
);

export default TimeLine;
