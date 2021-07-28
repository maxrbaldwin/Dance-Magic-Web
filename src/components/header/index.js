import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, Fragment } from "react"
import styled, { withTheme, css } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/fontawesome-free-solid'

import MaxWidth from "@styles/maxWidth"
import padding from "@styles/padding"

const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`
const DesktopHeaderWrapper = styled.div`
  display: block;
  @media (max-width: 800px) {
    display: none;
  }
`
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #e68bbe;
  border-bottom: 5px solid #fff;
  ${padding}
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
  flex-direction: row;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
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
  margin: 10px 0 0 0;
  font-size: 22px;
`
const LinkStyles = css`
  font-family: 'Merriweather';
  font-weight: 400;
  color: #000;
  text-decoration: none;
`
const NavItemLink = styled(props => <Link {...props} />)`
  ${LinkStyles}
`
// eslint-disable-next-line
const NavItemAnchor = styled(props => <a {...props} />)`
  ${LinkStyles}
`
const MobileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`
const MobileFlex = styled.div`
  flex-grow: 1;
`
const Hamburger = styled.div`
  flex-grow: 1;
`
const CloseIcon = styled.div`
  margin-bottom: 20px;
`

const MobileNavOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: #e68bbe;
  padding: 20px;
  display: ${({ hidden }) => hidden ? 'none' : 'block'}
`
const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`
const MobileNavItem = styled.div`
  margin: 10px 0px;
`

const facebookUrl = 'https://www.facebook.com/Dance-Magic-424482520956394/';

const DesktopHeader = () => (
  <DesktopHeaderWrapper>
    <HeaderContainer>
      <MaxWidth>
        <HeaderRow>
          <SiteTitle>
            <NavItemLink to="/">Dance Magic</NavItemLink>
          </SiteTitle>
          <NavBar>
            <NavList>
              <NavItem>
                <NavItemLink to="/">Home</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/contact">Contact</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/registration">Registration</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemAnchor href={facebookUrl} target="_blank">Join us on Facebook</NavItemAnchor>
              </NavItem>
            </NavList>
          </NavBar>
        </HeaderRow>
      </MaxWidth>
    </HeaderContainer>
  </DesktopHeaderWrapper>
)

const iconSize = '2x'

const MobileHeader = () => {
  const [isOverlayHidden, setOverlayHidden] = useState(true);

  const onHamburgerClick = () => {
    setOverlayHidden(false);
  }

  const onCloseClick = () => {
    setOverlayHidden(true);
  }

  return (
    <MobileWrapper>
      <HeaderContainer>
        <MaxWidth>
          <MobileNavOverlay hidden={isOverlayHidden}>
            <CloseIcon onClick={onCloseClick}>
              <FontAwesomeIcon size={iconSize} icon={faTimesCircle} />
            </CloseIcon>
            <MobileNav>
              <MobileNavItem>
                <NavItemLink to="/">Home</NavItemLink>
              </MobileNavItem>
              <MobileNavItem>
                <NavItemLink to="/contact">Contact</NavItemLink>
              </MobileNavItem>
              <MobileNavItem>
                <NavItemLink to="/registration">Registration</NavItemLink>
              </MobileNavItem>
              <MobileNavItem>
                <NavItemAnchor href={facebookUrl} target="_blank">Join us on Facebook</NavItemAnchor>
              </MobileNavItem>
            </MobileNav>
          </MobileNavOverlay>
          <MobileRow>
            <Hamburger onClick={onHamburgerClick}>
              <FontAwesomeIcon size={iconSize} icon={faBars} />
            </Hamburger>
            <MobileFlex>
              <SiteTitle>
                <NavItemLink to="/">Dance Magic</NavItemLink>
              </SiteTitle>
            </MobileFlex>
          </MobileRow>
        </MaxWidth>
      </HeaderContainer>
    </MobileWrapper>
  )
}

const Header = props => (
  <Fragment>
    <MobileHeader {...props} />
    <DesktopHeader {...props} />
  </Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTheme(Header)
