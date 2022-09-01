import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled.button`
  padding: 10px 20px;
  background-color: black;
  font-family: 'PT Serif';
  width: 30%;
  align-self: center;
  border: 2px solid #fff;

  @media (max-width: 700px) {
    width: auto;
    padding: 10px 30px;
  }
`;

const ButtonItemAnchor = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`;

const ContactButton = () => (
  <Button>
    <ButtonItemAnchor to='/registration'>Register</ButtonItemAnchor>
  </Button>
);

export default ContactButton;