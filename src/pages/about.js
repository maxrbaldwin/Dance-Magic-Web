import React from 'react'
import styled from 'styled-components';

import Layout from '@components/layout'
import SEO from '@components/seo'

import fullScreen from '@styles/fullScreen';


const mapSrc = 'https://www.google.com/maps/d/u/1/embed?mid=1JrcjxOMyRbbmDRnP9ncv9JrFQmHRANFk';

const Map = styled.iframe`
  ${fullScreen}
`;

const HeroContainer = styled.div`
  ${fullScreen}
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #000;
  background-position: center;
  background-size: cover;
  align-items: center;
  position: relative;
  border-bottom: 5px solid #fff;
`;

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <HeroContainer>
      <Map src={mapSrc} />
    </HeroContainer>
  </Layout>
)

export default SecondPage
