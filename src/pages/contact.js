import React from "react"
import styled, { css } from "styled-components"
import FontAwesome from 'react-fontawesome';

import withThemeProvider from "@components/withThemeProvider"
import { withTheme } from "styled-components"
import Layout from "@components/layout"
import SEO from "@components/seo"
import ContactForm from "@components/contactForm"

import MaxWidth from "@styles/maxWidth"

const ContactContainer = styled.div`
  background-color: #f4b8da;
  height: 100vh;
  width: 100%;
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
`
const Map = styled.iframe`
  ${ContactInfoItemStyles}
  width: 100%;
  height: 300px;
`

const defaultHeader = "Get In Touch Today"
const mapSrc =
  "https://www.google.com/maps/d/u/1/embed?mid=1JrcjxOMyRbbmDRnP9ncv9JrFQmHRANFk"

const Contact = props => {
  const { viewport } = props.theme
  return (
    <Layout>
      <SEO title="Page two" />
      <ContactContainer>
        <MaxWidth>
          <ContactRow viewport={viewport}>
            <ContactItemLeft viewport={viewport}>
              <ContactInfoHeader>
                <HeaderText>{defaultHeader}</HeaderText>
              </ContactInfoHeader>
              <ContactForm />
            </ContactItemLeft>
            <ContactItemRight viewport={viewport}>
              <ContactInfoColumn>
                <ContactInfoItem>
                  <ContactList>
                    <ContactListItem>
                    <FontAwesome name="map-marker-alt" size="2x" />
                      <p>
                        609-561-1414
                      </p>
                    </ContactListItem>
                    <ContactListItem>
                      Address: 750 S White Horse Pike, Hammonton, NJ 08037
                    </ContactListItem>
                  </ContactList>
                </ContactInfoItem>
                <ContactInfoItem>
                  <Map src={mapSrc} />
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
