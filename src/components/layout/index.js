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
  background-color: #e68bbe;
  text-align: center;
  font-size: 14px;
  border-top: 5px solid #fff;
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
  `);

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer>
        <MaxWidth>609-561-1414 | 750 S White Horse Pike, Hammonton, NJ, 08037</MaxWidth>
      </Footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
