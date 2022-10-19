import React from 'react';
import PropTypes from 'prop-types';
import { Sections, Titel } from './Section.styled';

export const Section = ({ titel, children }) => {
  return (
    <Sections>
      <Titel>{titel}</Titel>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  titel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
