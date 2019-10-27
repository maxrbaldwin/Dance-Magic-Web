import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { withTheme, css } from "styled-components"

import MaxWidth from "@styles/maxWidth"

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #e68bbe;
  border-bottom: 5px solid #fff;
`
const SiteTitle = styled.h1`
  color: white;
  text-decoration: none;
  margin: 0px;
  font-family: 'PT Serif';
  text-shadow: 1px 1px #fff;
`
const HeaderRow = styled.div`
  display: flex;
  flex-direction: ${({ viewport }) =>
    viewport === "large" ? "row" : "column"};
  align-items: center;
`
const NavBar = styled.nav``
const NavList = styled.ul`
  display: inline-block;
  padding: 0px 20px;
  margin-bottom: 0px;
`
const NavItem = styled.li`
  display: inline-block;
  padding: 0px 20px;
  font-family: 'Merriweather';
  font-weight: 400;
  margin: 10px 0 0 0;
`
const LinkStyles = css`
  color: #000;
  text-decoration: none;
`
const NavItemLink = styled(props => <Link {...props} />)`
  ${LinkStyles}
`
const NavItemAnchor = styled(props => <a {...props} />)`
  ${LinkStyles}
`

const facebookUrl = 'https://www.facebook.com/Dance-Magic-424482520956394/';

const Header = ({ theme, siteTitle }) => {
  const { viewport } = theme;
  return (
    <HeaderContainer>
      <MaxWidth>
        <HeaderRow viewport={viewport}>
          <SiteTitle>
            <NavItemLink to="/">{siteTitle}</NavItemLink>
          </SiteTitle>
          <NavBar>
            <NavList>
              <NavItem>
                <NavItemLink to="/">Home</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/about">About</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/contact">Contact</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemAnchor href={facebookUrl} target="_blank">Join us on Facebook</NavItemAnchor>
              </NavItem>
            </NavList>
          </NavBar>
        </HeaderRow>
      </MaxWidth>
    </HeaderContainer>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTheme(Header)
