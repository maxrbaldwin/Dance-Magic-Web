import styled, { css } from 'styled-components';

import fullScreen from '@styles/fullScreen';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => theme.viewport === 'large' ? 'row' : 'column'};
  flex-wrap: nowrap;
  max-width: 1280px;
  width: ${({ theme }) => theme.viewport === 'large' ? 'auto' : '100%'};
  margin: 0px auto;
`;
export const infoSection = css`
  width: 100%;
  height: ${({ theme }) => theme.viewport === 'large' ? '60vh' : 'auto'};
  min-height: 600px;
  max-height: ${({ theme }) => theme.viewport === 'small' ? 'auto' : '800px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid #fff;
  padding: ${({ theme }) => theme.viewport === 'large' ? '0px' : '60px 0px'};
  text-align: ${({ theme }) => theme.viewport === 'large' ? 'left' : 'center'};
`
export const InfoImg = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  width: ${({ theme }) => theme.viewport === 'large' ? '600px' : '100%'};
  height: 400px;
  border: 5px solid #fff;
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
  font-size: 16px;
`;

export const InfoHeader = styled.h2`
  padding-top: ${({ theme, left }) => left === true && theme.viewport === 'small' ? '20px' : 'auto'}
`;
