import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeetbackOptions.styled';

export const FeetbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
          style={{ backgroundColor: getRandomColor(option) }}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

function getRandomColor(option) {
  if (option === 'good') {
    return 'green';
  } else if (option === 'neutral') {
    return 'orange';
  }
  return 'red';
}

FeetbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
