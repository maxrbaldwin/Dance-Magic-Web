import React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'

import withThemeProvider from "@components/withThemeProvider"
import { withTheme } from "styled-components"
import Layout from "@components/layout"
import SEO from "@components/seo"
import ContactForm from "@components/contactForm"

import MaxWidth from "@styles/maxWidth"

const ContactContainer = styled.div`
  background-color: #f4b8da;
  width: 100%;
  height: ${({ theme }) => (theme.viewport === "large" ? "100vh" : "auto")}};
`

const ContactRow = styled.div`
  display: flex;
  flex-direction: ${({ viewport }) =>
    viewport === "large" ? "row" : "column"};
  align-items: stretch;
  justify-content: center;
  padding-top: 30px;
`

const ContactItem = css`
  flex-grow: 1;
`

const ContactItemLeft = styled.div`
  ${ContactItem}
  width: ${({ viewport }) => (viewport === "large" ? "60%" : "auto")};
`
const ContactItemRight = styled.div`
  ${ContactItem}
  width: ${({ viewport }) => (viewport === "large" ? "40%" : "auto")};
  text-align: ${({ viewport }) => viewport === "small" ? "center" : "auto"};
`
const ContactInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: relative;
`
const ContactInfoItemStyles = css`
  flex-grow: 1;
`

const ContactInfoItem = styled.div`
  ${ContactInfoItemStyles}
`

const ContactInfoHeader = styled.div`
  ${ContactInfoItemStyles}
`

const HeaderText = styled.h2`
  color: #000;
`
const ContactInfoText = styled.p`
  color: #000;
  font-size: 16px;
`
const ContactList = styled.div`
  color: #000;
`
const ContactListItemStyles = css`
  margin: 20px 0px;
`
const ContactListItem = styled.div`
  ${ContactInfoItemStyles}
  ${ContactListItemStyles}
`
const Map = styled.iframe`
  ${ContactInfoItemStyles}
  width: 100%;
  height: 300px;
`
const Icon = styled.span`
  padding-right: 10px;
`

const defaultHeader = "Get In Touch Today"
const mapSrc =
  "https://www.google.com/maps/d/u/1/embed?mid=1JrcjxOMyRbbmDRnP9ncv9JrFQmHRANFk"

const Contact = props => {
  const { viewport } = props.theme
  return (
    <Layout>
      <SEO title="Contact | Dance Magic | Hammonton, New Jersey" />
      <ContactContainer>
        <MaxWidth>
          <ContactRow viewport={viewport}>
            <ContactItemLeft viewport={viewport}>
              <ContactInfoHeader>
                <HeaderText>{defaultHeader}</HeaderText>
                <ContactInfoText>Reach out today and we will get back to you ASAP</ContactInfoText>
              </ContactInfoHeader>
              <ContactForm />
            </ContactItemLeft>
            <ContactItemRight viewport={viewport}>
              <ContactInfoHeader>
                <HeaderText>Contact Information</HeaderText>
              </ContactInfoHeader>
              <ContactInfoColumn>
                <ContactInfoItem>
                  <ContactList>
                    <ContactListItem>
                      <p><Icon><FontAwesomeIcon icon={faPhone} /></Icon> 609-561-1414</p>
                    </ContactListItem>
                    <ContactListItem>
                      <p><Icon><FontAwesomeIcon icon={faMapMarkerAlt} /></Icon> 750 S White Horse Pike<br/>Hammonton, NJ 08037</p>
                    </ContactListItem>
                    {/* <ContactListItem>
                      <Map src={mapSrc} />
                    </ContactListItem> */}
                  </ContactList>
                </ContactInfoItem>
              </ContactInfoColumn>
            </ContactItemRight>
          </ContactRow>
        </MaxWidth>
      </ContactContainer>
    </Layout>
  )
}

export default withThemeProvider(withTheme(Contact))
