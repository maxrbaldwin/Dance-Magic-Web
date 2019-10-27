import React, { Fragment } from "react"
import styled, { withTheme } from "styled-components"

import withThemeProvider from "@components/withThemeProvider"
import Layout from "@components/layout"
import SEO from "@components/seo"
import ContactButton from "@components/contactButton"

import MaxWidth from "@styles/maxWidth"
import { HeroContainer, HeroOverlay, HeroItem, HeroHeader, HeroText } from "@styles/heroContainer"
import {
  InfoContainer,
  InfoItem,
  InfoText,
  InfoImg,
  infoSection,
  InfoParagraph,
} from "@styles/infoContainer"

const heroImage =
  "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1538704_581048025299842_1940666397_n.jpg?_nc_cat=110&_nc_oc=AQlzmOEjLTi49VXeX82YptzM6w3zq6jYtzHHQcDd9_Kvg-X_Pa6DFHtz2biJZak1fH8&_nc_ht=scontent-atl3-1.xx&oh=2e2f7ed03d1d9d633c03616f654e81fa&oe=5DDAA6CF"
// const contactImage = 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/25354050_1739777139426919_3416904173659625501_n.jpg?_nc_cat=104&_nc_oc=AQmzHhN0YCLqan3v3pDI5Aqa0TU9OiCYrAOJu06bMGHcDUK9E25AbdsqITTfh_VvUdg&_nc_ht=scontent-atl3-1.xx&oh=b0897d3281c881885a451a821d6b6901&oe=5DCF44CA';
const contactGIF = "https://media.giphy.com/media/l0CLTZ4kNSCq2eZpe/giphy.gif"
const competitiveImage =
  "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/66836357_2846907752047180_5970592230405046272_n.jpg?_nc_cat=101&_nc_oc=AQkpRCPaEHQnmJfRND9T_bQsijG11OoN3sQ9z-ovfgFTm6O3t96sU43gvb0bizS8cfo&_nc_ht=scontent-atl3-1.xx&oh=ee275108e9132f7b032161e954834031&oe=5DD4506D"
const serviceImage =
  "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/22450023_1662051810532786_3558782095292139727_n.jpg?_nc_cat=108&_nc_oc=AQn8diqDoQQPc-Kzz-AumJVShqRO7nyWlX6MoJt7aihIthlBMdiAnAMDc-78DI2ivTk&_nc_ht=scontent-atl3-1.xx&oh=9c537689bff097c221b03cf673b2d4aa&oe=5DD28CDE"

const ContactInfo = styled.section`
  ${infoSection}
  background-color: #e68bbe;
`
const UserQuotes = styled.section`
  ${infoSection}
  background-color: #f4b8da;
  height: 40vh;
  padding-bottom: 50px;
  min-height: 450px;
`
const Quote = styled.div`
  width: ${({ theme }) => theme.viewport === "large" ? "33.33333333%" : "auto"};
  display: flex;
  flex-direction: column;
  position: relative;
  margin: ${({ theme }) =>
    theme.viewport === "large" ? "0px 40px" : "20px 40px"};
  justify-content: center;
`
const QuoteColumn = styled.div``
const QuoteText = styled.p`
  text-align: center;
`
const QuoteRow = styled.div`
  display: flex;
  flex-direction: ${({ theme }) =>
    theme.viewport === "large" ? "row" : "column"};
  width: 90%;
  justify-content: center;
`
const QuoteItem = styled.div`
  align-self: center;
`
const QuoteBottom = styled.div(({ theme }) =>
  theme.viewport === "large"
    ? {
        position: "absolute",
        bottom: "-50px",
        left: "0px",
        right: "0px",
      }
    : {}
)
const QuoteIcon = styled.div`
  background-image: url("https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/41951408_2119602044741450_8058945229689978880_n.jpg?_nc_cat=105&_nc_oc=AQn6gTdO55OyZtylsUqcazaZhLDCkRWGwHhkmcljFRWCHN62Wfts1ZOhUfYCX4uYbrk&_nc_ht=scontent-atl3-1.xx&oh=1f967708fa11850a847f0daf175da772&oe=5DD0D224");
  background-position: center;
  background-size: cover;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin: ${({ theme }) =>
    theme.viewport === "large" ? "0 20px 0 0" : "auto"};
`
const CompetitionInfo = styled.section`
  ${infoSection}
  background-color: #e68bbe;
`
const ServiceInfo = styled.section`
  ${infoSection}
  background-color: #f4b8da;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Fragment>
      <HeroContainer img={heroImage}>
        <HeroOverlay />
        <MaxWidth>
          <HeroItem>
            <HeroHeader>36 years of Dance Achievement</HeroHeader>
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
            <h2>Classes for All Ages</h2>
            <InfoText>
              <InfoParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.</InfoParagraph>
            </InfoText>
            <ContactButton />
          </InfoItem>
        </InfoContainer>
      </ContactInfo>
      <UserQuotes>
        <h2>Community Quotes</h2>
        <QuoteRow>
          <Quote>
            <QuoteColumn>
              <QuoteText>
                I wouldn't be where I am today without Dance Magic. I got an
                incredible dance education thanks to Miss Dawn & the rest of the
                incredible staff.
              </QuoteText>
            </QuoteColumn>
            <QuoteColumn>
              <QuoteBottom>
                <QuoteRow>
                  <QuoteItem>
                    <QuoteIcon />
                  </QuoteItem>
                  <QuoteItem>- Max Baldwin</QuoteItem>
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
                    <QuoteIcon />
                  </QuoteItem>
                  <QuoteItem>- Max Baldwin</QuoteItem>
                </QuoteRow>
              </QuoteBottom>
            </QuoteColumn>
          </Quote>
          <Quote>
            <QuoteColumn>
              <QuoteText>
                Love the owner, teachers are very friendly. There recital they
                put on at the end of year is very professional.
              </QuoteText>
            </QuoteColumn>
            <QuoteColumn>
              <QuoteBottom>
                <QuoteRow>
                  <QuoteItem>
                    <QuoteIcon />
                  </QuoteItem>
                  <QuoteItem>- Max Baldwin</QuoteItem>
                </QuoteRow>
              </QuoteBottom>
            </QuoteColumn>
          </Quote>
        </QuoteRow>
      </UserQuotes>
      <CompetitionInfo>
        <InfoContainer>
          <InfoItem>
            <h2>Competitive Dance Oppurtunities</h2>
            <InfoText>
            <InfoParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.</InfoParagraph>
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
            <h2>More Than Just A Dance Studio</h2>
            <InfoText>
              <InfoParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.</InfoParagraph>
            </InfoText>
          </InfoItem>
        </InfoContainer>
      </ServiceInfo>
    </Fragment>
  </Layout>
);

export default withThemeProvider(withTheme(IndexPage))
