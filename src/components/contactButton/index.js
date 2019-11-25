import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled.button`
  padding: ${({ theme }) => theme.viewport === 'small' ? '10px 30px' : '10px 20px'};
  background-color: black;
  font-family: 'PT Serif';
  width: ${({ theme }) => theme.viewport === 'small' ? 'auto' : '30%'};
  align-self: center;
  border: 2px solid #fff;
  font-size: ${({ theme }) => theme.viewport === 'small' ? '20px' : '20px'};
`;

const ButtonItemAnchor = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`;

const ContactButton = () => (
  <Button>
    <ButtonItemAnchor to='/contact'>Get Info</ButtonItemAnchor>
  </Button>
);

export default ContactButton;