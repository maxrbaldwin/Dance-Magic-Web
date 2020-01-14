import React, { Fragment } from "react"
import styled from "styled-components"

import Layout from "@components/layout"
import SEO from "@components/seo"
import ContactButton from "@components/contactButton"

import MaxWidth from "@styles/maxWidth"
import { HeroContainer, HeroOverlay, HeroItem, HeroHeader, HeroText } from "@styles/HeroContainer"
import {
  InfoContainer,
  InfoItem,
  InfoText,
  InfoImg,
  infoSection,
  InfoParagraph,
  InfoHeader
} from "@styles/InfoContainer"

const heroImage = "https://storage.cloud.google.com/dance-magic-images/home/hero.jpg?authuser=1"
const contactGIF = "https://storage.cloud.google.com/dance-magic-images/home/classes.gif?authuser=1"
const competitiveImage = "https://storage.cloud.google.com/dance-magic-images/home/comp.jpg?authuser=1"
const serviceImage = "https://storage.cloud.google.com/dance-magic-images/home/charity.jpg?authuser=1"

const sarah = "https://storage.cloud.google.com/dance-magic-images/thumbs/sarah_thumb.jpg?authuser=1"
const nick = "https://storage.cloud.google.com/dance-magic-images/thumbs/nick_thumb.jpg?authuser=1"
const bill = "https://storage.cloud.google.com/dance-magic-images/thumbs/bill_thumb.jpg?authuser=1"

const ContactInfo = styled.section`
  ${infoSection}
  background-color: #e68bbe;
`
const UserQuotes = styled.section`
  ${infoSection}
  background-color: #f4b8da;
  min-height: 500px;

  @media (max-width: 700px) {
    height: auto;
  }
`
const Quote = styled.div`
  width: 33.33333333%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 40px 0px 40px;
  justify-content: center;

  @media (max-width: 700px) {
    width: auto;
    margin: 40px;
  }
`
const QuoteColumn = styled.div`
  min-height: 60px;
`
const QuoteText = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 35px;
`
const QuoteRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const QuoteItem = styled.div`
  align-self: center;
  font-size: 22px;
`
const QuoteBottom = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;

  @media (max-width: 700px) {
    position: static;
    bottom: 0px;
  }
`
const QuoteIcon = styled.div`
  background-image: ${props => `url(${props.src})`} ;
  background-position: center;
  background-size: cover;
  height: 70px;
  width: 70px;
  border-radius: 100%;
  margin: 0 20px 0 0;
  
  @media (max-width: 700px) {
    margin: 0px 0px 20px 0px;
  }
`
const CompetitionInfo = styled.section`
  ${infoSection}
  background-color: #e68bbe;
`
const ServiceInfo = styled.section`
  ${infoSection}
  background-color: #f4b8da;
  border-bottom: 0px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Dance Magic | Hammonton, New Jersey" />
    <Fragment>
      <HeroContainer img={heroImage}>
        <HeroOverlay />
        <MaxWidth>
          <HeroItem>
            <HeroHeader>36 Years of Dance Achievement</HeroHeader>
            <HeroText>Join an award winning dance community</HeroText>
            <ContactButton />
          </HeroItem>
        </MaxWidth>
      </HeroContainer>
      <ContactInfo>
        <InfoContainer>
          <InfoItem>
            <InfoImg img={`${contactGIF}`} />
          </InfoItem>
          <InfoItem>
            <InfoHeader left={true}>Classes for All Ages</InfoHeader>
            <InfoText>
              <InfoParagraph>
              Dance Magic offers daily after school dance classes for ages 4 to 18 in a wide range of different genres, <b>tap</b>, <b>jazz</b>, <b>ballet</b>, <b>hip hop</b> and <b>modern</b>. Dance magic hosts two dance recitals a year. One in December and one in June. At these recitals students perform the routines they learn over the course of the dance semesters.
              </InfoParagraph>
            </InfoText>
            <ContactButton />
          </InfoItem>
        </InfoContainer>
      </ContactInfo>
      <UserQuotes>
        <InfoHeader>Community Quotes</InfoHeader>
        <QuoteRow>
          <Quote>
            <QuoteColumn>
              <QuoteText>
                I got an
                incredible dance education thanks to Miss Dawn & the rest of the
                incredible staff.
              </QuoteText>
            </QuoteColumn>
            <QuoteColumn>
              <QuoteBottom>
                <QuoteRow>
                  <QuoteItem>
                    <QuoteIcon src={sarah} />
                  </QuoteItem>
                  <QuoteItem>- Sarah Garvey Jansen</QuoteItem>
                </QuoteRow>
              </QuoteBottom>
            </QuoteColumn>
          </Quote>
          <Quote>
            <QuoteColumn>
              <QuoteText>
                Best thing that's happened to my family and our community.
              </QuoteText>
            </QuoteColumn>
            <QuoteColumn>
              <QuoteBottom>
                <QuoteRow>
                  <QuoteItem>
                    <QuoteIcon src={nick} />
                  </QuoteItem>
                  <QuoteItem>- Nick Goblirsch</QuoteItem>
                </QuoteRow>
              </QuoteBottom>
            </QuoteColumn>
          </Quote>
          <Quote>
            <QuoteColumn>
              <QuoteText>
                Price is fair. Teachers are wonderful. My daughter loves it there
              </QuoteText>
            </QuoteColumn>
            <QuoteColumn>
              <QuoteBottom>
                <QuoteRow>
                  <QuoteItem>
                    <QuoteIcon src={bill} />
                  </QuoteItem>
                  <QuoteItem>-Bob Mills</QuoteItem>
                </QuoteRow>
              </QuoteBottom>
            </QuoteColumn>
          </Quote>
        </QuoteRow>
      </UserQuotes>
      <CompetitionInfo>
        <InfoContainer>
          <InfoItem>
            <InfoHeader>Competitive Dance Oppurtunities</InfoHeader>
            <InfoText>
            <InfoParagraph>Dance Magic offers opportunities for students to participate in the award winning Dance Magic Company Dance Group. The Company Dance Group competes at dance competitions all over the east coast, New Jersey, Pennsylvania, Maryland, Florida. Students have even had the opportunity to Dance in the Disney World Magic Kingdom Light Parade. </InfoParagraph>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoImg img={`${competitiveImage}`} />
          </InfoItem>
        </InfoContainer>
      </CompetitionInfo>
      <ServiceInfo>
        <InfoContainer>
          <InfoItem>
            <InfoImg img={`${serviceImage}`} />
          </InfoItem>
          <InfoItem>
            <InfoHeader left={true}>More Than Just A Dance Studio</InfoHeader>
            <InfoText>
              <InfoParagraph>Dance Magic is more than just a Dance studio. It is a community that is committed to helping students grow as dancers and as people. At Dance Magic students will have opportunities to participate in a wide range of different community events, parades and raise money for local charities. </InfoParagraph>
            </InfoText>
          </InfoItem>
        </InfoContainer>
      </ServiceInfo>
    </Fragment>
  </Layout>
);

export default IndexPage
