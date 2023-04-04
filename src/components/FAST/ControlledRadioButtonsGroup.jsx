import React from 'react';
import PropTypes from 'prop-types';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// const [value, setValue] = useState('female');
// const handleChange = (event) => {
//  setValue(event.target.value);
// };
const ControlledRadioButtonsGroup = ({
  text,
  value,
  handleChange,
  arrayQuestions,
}) => (
  <FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group">{text}</FormLabel>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
      {(arrayQuestions).map((question) => (
        <FormControlLabel value={question.key} control={<Radio />} label={question.value} />
      ))}
    </RadioGroup>
  </FormControl>
);

ControlledRadioButtonsGroup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  arrayQuestions: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ControlledRadioButtonsGroup;
