import React from 'react'
import Link from 'gatsby-link'

import Logo from '../Logo';

const Sidebar = () => (
  <div id="sidebar" className="column sidebar">
    <div className="section">
      <Logo />

      <div className="region region-sidebar-first">
        <div id="block-menu-block-1" className="block block-menu-block">

          <div className="content">
            <div className="menu-block-wrapper menu-block-1 menu-name-main-menu parent-mlid-0 menu-level-1">
              <ul className="menu">
                <li className="first leaf menu-mlid-394"><a href="/purchase" title="Purchase a copy of the book">Purchase a Copy</a></li>
                <li className="expanded menu-mlid-392"><a href="/ongoing-conversation" title="">An Ongoing Conversation: More Stories and Images</a>
                  <ul className="menu">
                    <li className="first leaf menu-mlid-572"><a href="/ongoing-conversation/stories1912-1947" title="">Pre-1912 through 1947</a></li>
                    <li className="leaf menu-mlid-573"><a href="/ongoing-conversation/stories1947-1965" title="">1947-1965</a></li>
                    <li className="leaf menu-mlid-574"><a href="/ongoing-conversation/stories1965-1972">1965-1972</a></li>
                    <li className="leaf menu-mlid-575"><a href="/ongoing-conversation/stories1972-1990">1972-1990</a></li>
                    <li className="leaf menu-mlid-577"><a href="/ongoing-conversation/stories1990-1999">1990-1999</a></li>
                    <li className="last leaf menu-mlid-576"><a href="/ongoing-conversation/stories1999-present">1999-present</a></li>
                  </ul>
                </li>
                <li className="leaf menu-mlid-393"><a href="/add-content" title="Add Your Own">Add Your Own</a></li>
                <li className="leaf menu-mlid-395"><a href="http://www.keswick.com" title="Visit and make new memories">Make a Reservation at Keswick Hall</a></li>
                <li className="last leaf menu-mlid-616"><a href="/authorinfo">About the Author</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
)

export default Sidebar
