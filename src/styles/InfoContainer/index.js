import styled, { css } from 'styled-components';

import fullScreen from '@styles/fullScreen';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 1280px;
  width: auto;
  margin: 0px auto;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%:
  }
`;
export const infoSection = css`
  width: 100%;
  height: 60vh;
  min-height: 600px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid #fff;
  padding: 0px;
  text-align: left;

  @media (max-width: 700px) {
    height: auto;
    max-height: none;
    padding: 60px 0px;
    text-align: center;
  }
`
export const InfoImg = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  width: 600px;
  height: 400px;
  border: 5px solid #fff;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const InfoItem = styled.div`
  text-align: center;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const InfoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const InfoParagraph = styled.p`
  font-size: 20px;
  line-height: 35px;
`;

export const InfoHeader = styled.h2`
  font-size: 32px;
  
  @media (max-width: 700px) {
    padding-top: ${({ left }) => left ? '40px' : 'auto'};
  }
`;
