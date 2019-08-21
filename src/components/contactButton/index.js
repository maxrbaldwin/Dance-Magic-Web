import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Button = styled.button`
`;

const ContactButton = () => (
  <Button>
    <Link to='/contact'>Get Info</Link>
  </Button>
);

export default ContactButton;