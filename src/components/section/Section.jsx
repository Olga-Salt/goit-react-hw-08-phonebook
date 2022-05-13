import React from 'react';
import { Wrapper, Title } from './Section.styled';
import PropTypes from 'prop-types';
export const Section = ({
  title = 'Welcome to the phone book app',
  children,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
