import React from 'react'
import styled from 'styled-components'

import Layout from '@components/layout'
import SEO from '@components/seo'
import MaxWidth from "@styles/maxWidth"

const RegistrationIframe = styled.iframe`
  min-height: 2350px;
  width: 100%;
`

const RegistrationWrapper = styled.div`
  margin-top: 40px;
`

const iframeSrc = 'https://docs.google.com/forms/d/e/1FAIpQLSeoq-d3vLcvlsPo1PibngTIC40cJtJSAKFyN2FQ2cNsVm03lw/viewform?embedded=true'

const Registration = () => (
  <Layout>
    <SEO title='Dance Magic Registration' />
    <RegistrationWrapper>
      <MaxWidth>
        <RegistrationIframe
          frameBorder={0}
          src={iframeSrc}>
          Loading…
        </RegistrationIframe>
      </MaxWidth>
    </RegistrationWrapper>
  </Layout>
)

export default Registration
