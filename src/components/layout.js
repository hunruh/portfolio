import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

import '../styles/core.scss'

const Layout = ({ pageTitle, children }) => (
  <>
    <Header pageTitle={pageTitle} />
    <div className="container">
      {children}
      <footer>
        © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired
}

export default Layout
