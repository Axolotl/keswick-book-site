import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'

//import './defaults.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
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
