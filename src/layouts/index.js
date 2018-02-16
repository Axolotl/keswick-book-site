import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'

// import css files
// system.css needs to be loaded first otherwise it will frell with index.css
import './system.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Story of Keswick Hall"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel:"stylesheet", type:'text/css', href:"https://fonts.googleapis.com/css?family=Quattrocento" },
        { rel:"stylesheet", type:'text/css', href:"https://fonts.googleapis.com/css?family=Nobile" },
        { rel:"stylesheet", type:'text/css', href:"https://fonts.googleapis.com/css?family=Vollkorn" },
        { rel:"stylesheet", type:'text/css', href:"https://fonts.googleapis.com/css?family=Dancing+Script" },
      ]}
    />
    <Sidebar />
    <div id="content" className="column">
      <div className="section">
        <a id="main-content"></a>
        <div className="tabs"></div> 
        <div className="region region-content">
          <div id="block-system-main" className="block block-system">
            <div className="content">
              <div id="node-1" className="node node-page clearfix" about="/content/homepage" typeof="foaf:Document">
                {children()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
