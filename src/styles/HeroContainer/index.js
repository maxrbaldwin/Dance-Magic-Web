import styled from 'styled-components';

import fullScreen from '@styles/fullScreen';

export const HeroContainer = styled.div`
  ${fullScreen}
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #000;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  align-items: center;
  position: relative;
  border-bottom: 5px solid #fff;
`;
export const HeroItem = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;
`;
export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0,0,0,.4);
`;

export const HeroHeader = styled.h2`
  font-size: 60px;
  color: #fff;
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

export const HeroText = styled.p`
  font-size: 22px;
  color: #fff;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
