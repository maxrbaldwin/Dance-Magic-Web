import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/layout'
import SEO from '@components/seo'

const notFoundImageSource = 'https://storage.cloud.google.com/dance-magic-images/404.gif'

const NotFoundWrapper = styled.div`
  height: 100vh;
  text-align: center;
  padding: 50px 20px 0 20px;
`

const NotFoundImage = styled.img`
  border: 5px solid #fff;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <NotFoundWrapper>
      <h1>404! Page Not Found</h1>
      <h2>This is not the page you're looking for</h2>
      <p>Please return to the <Link to="/">homepage</Link></p>
      <NotFoundImage src={notFoundImageSource} />
    </NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
