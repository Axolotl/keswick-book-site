import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div id="root">
    <Helmet
      title="The Story of Keswick Hall"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css?family=Quattrocento',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css?family=Nobile',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css?family=Vollkorn',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css?family=Dancing+Script',
        },
      ]}
    />
    <Sidebar />
    <div
      id="content"
      className="node node-page"
      about="/content/homepage"
      typeof="foaf:Document"
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
