import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import MaxWidth from '@styles/maxWidth';
import flexContainer from '@styles/flexContainer';
import flexItem from '@styles/flexItem';

const headerItem = css`
  ${flexItem}
`
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ff80ff;
  border-bottom: 5px solid #fff;
`;
const SiteTitle = styled.h1`
  color: white;
  text-decoration: none;
  margin: 0px;
  ${headerItem}
`;
const HeaderRow = styled.div`
  ${flexContainer}
`;
const NavBar = styled.nav`
  ${headerItem}
`;
const NavList = styled.ul`
  display: inline-block;
  padding: 0px 20px;
  margin-bottom: 0px;
`;
const NavItem = styled.li`
  display: inline-block;
  padding: 0px 20px;
`;
const NavItemAnchor = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <MaxWidth>
      <HeaderRow>
        <SiteTitle>
          <NavItemAnchor to='/'>
            {siteTitle}
          </NavItemAnchor>
        </SiteTitle>
        <NavBar>
          <NavList>
            <NavItem><NavItemAnchor to='/'>Home</NavItemAnchor></NavItem>
            <NavItem><NavItemAnchor to='/about'>About</NavItemAnchor></NavItem>
            <NavItem><NavItemAnchor to='/contact'>Contact</NavItemAnchor></NavItem>
          </NavList>
        </NavBar>
      </HeaderRow>
    </MaxWidth>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
