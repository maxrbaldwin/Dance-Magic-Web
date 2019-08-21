import React from 'react';
import styled, { css } from 'styled-components';

import Layout from '@components/layout'
import SEO from '@components/seo'
import ContactButton from '@components/contactButton';

import fullScreen from '@styles/fullScreen';
import MaxWidth from '@styles/maxWidth'

const heroImage = 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1538704_581048025299842_1940666397_n.jpg?_nc_cat=110&_nc_oc=AQlzmOEjLTi49VXeX82YptzM6w3zq6jYtzHHQcDd9_Kvg-X_Pa6DFHtz2biJZak1fH8&_nc_ht=scontent-atl3-1.xx&oh=2e2f7ed03d1d9d633c03616f654e81fa&oe=5DDAA6CF';
// const contactImage = 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/25354050_1739777139426919_3416904173659625501_n.jpg?_nc_cat=104&_nc_oc=AQmzHhN0YCLqan3v3pDI5Aqa0TU9OiCYrAOJu06bMGHcDUK9E25AbdsqITTfh_VvUdg&_nc_ht=scontent-atl3-1.xx&oh=b0897d3281c881885a451a821d6b6901&oe=5DCF44CA';
const contactGIF = 'https://media.giphy.com/media/l0CLTZ4kNSCq2eZpe/giphy.gif';
const competitiveImage = 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/66836357_2846907752047180_5970592230405046272_n.jpg?_nc_cat=101&_nc_oc=AQkpRCPaEHQnmJfRND9T_bQsijG11OoN3sQ9z-ovfgFTm6O3t96sU43gvb0bizS8cfo&_nc_ht=scontent-atl3-1.xx&oh=ee275108e9132f7b032161e954834031&oe=5DD4506D';
const serviceImage = 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/22450023_1662051810532786_3558782095292139727_n.jpg?_nc_cat=108&_nc_oc=AQn8diqDoQQPc-Kzz-AumJVShqRO7nyWlX6MoJt7aihIthlBMdiAnAMDc-78DI2ivTk&_nc_ht=scontent-atl3-1.xx&oh=9c537689bff097c221b03cf673b2d4aa&oe=5DD28CDE';

const HeroContainer = styled.div`
  ${fullScreen}
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #000;
  background-image: url(${heroImage});
  background-position: center;
  background-size: cover;
  align-items: center;
  position: relative;
  border-bottom: 5px solid #fff;
`;
const HeroItem = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;
`;
const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0,0,0,.5);
`
const infoSection = css`
  ${fullScreen}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid #fff;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 80%;
  margin: 0px auto;
`;
const ContactInfo = styled.section`
  ${infoSection}
  background-color: #0000ff;
`
const InfoImg = styled.div`
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  width: 600px;
  height: 400px;
  border: 5px solid #fff;
`;
const InfoItem = styled.div`
  text-align: center;
  flex-grow: 1;
  margin: 0px 20px;
`;
const InfoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`
const CompetitionInfo = styled.section`
  ${infoSection}
  background-color: #ff0000;
`;
const ServiceInfo = styled.section`
  ${infoSection}
  background-color: #0000ff;
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <HeroContainer>
      <HeroOverlay />
      <MaxWidth>
      <HeroItem>
        <h2>35 years of Dance Achievement</h2>
        <p>Join an award winning dance community</p>
        <ContactButton />
      </HeroItem>
      </MaxWidth>
    </HeroContainer>
    <ContactInfo>
      <h2>Classes for All Ages</h2>
      <InfoContainer>
        <InfoItem>
          <InfoImg img={`${contactGIF}`} />
        </InfoItem>
        <InfoItem>
          <InfoText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </InfoText>
          <ContactButton />
        </InfoItem>
      </InfoContainer>
    </ContactInfo>
    <CompetitionInfo>
      <h2>Competitive Dance Oppurtunities Avaiable</h2>
      <InfoContainer>
        <InfoItem>
          <InfoText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </InfoText>
        </InfoItem>
        <InfoItem>
          <InfoImg img={`${competitiveImage}`} />
        </InfoItem>
      </InfoContainer>
    </CompetitionInfo>
    <ServiceInfo>
      <h2>More Than Just A Dance Studio</h2>
      <InfoContainer>
        <InfoItem>
          <InfoImg img={`${serviceImage}`} />
        </InfoItem>
        <InfoItem>
          <InfoText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </InfoText>
        </InfoItem>
      </InfoContainer>
    </ServiceInfo>
  </Layout>
)

export default IndexPage
