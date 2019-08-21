/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'

import Header from '@components/header'
import '@components/layout/layout.css'
import MaxWidth from '@styles/maxWidth'

const Footer = styled.footer`
  background-color: #ff80ff;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer>
        <MaxWidth>Footer</MaxWidth>
      </Footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
