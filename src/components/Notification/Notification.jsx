import React from 'react';
import PropTypes from 'prop-types';
import { Titel } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Titel>{message}</Titel>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
