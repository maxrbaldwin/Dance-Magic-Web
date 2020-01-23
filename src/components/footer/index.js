import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MaxWidth from '@styles/maxWidth'
import padding from '@styles/padding'

const recaptchaPrivacy = 'https://policies.google.com/privacy'
const recaptchaTerms = 'https://policies.google.com/terms'
const reCaptchaInfo = 'https://www.google.com/recaptcha/intro/v3.html'

const FooterWrapper = styled.footer`
  background-color: #e68bbe;
  text-align: center;
  font-size: 14px;
  border-top: 5px solid #fff;
  ${padding}
`;

const TeesAndCees = styled.div`
  font-size: 11px;
`

const Footer = () => (
  <FooterWrapper>
    <MaxWidth>609-561-1414 | 750 S White Horse Pike, Hammonton, NJ, 08037 | <Link to="/policies">Dance Studio Policies</Link></MaxWidth>
    <MaxWidth>
      <TeesAndCees>
        reCaptcha v3 <a target="_blank" href={recaptchaTerms}>terms</a> |
        reCaptcha v3 <a target="_blank" href={recaptchaPrivacy}>privacy</a> |
        <a target="_blank" href={reCaptchaInfo}> reCaptcha v3</a>
      </TeesAndCees>
    </MaxWidth>
  </FooterWrapper>
)

export default Footer