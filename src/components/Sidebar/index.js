import React from 'react'
import Link from 'gatsby-link'

import Logo from '../Logo';

const Sidebar = () => (
  <div id="sidebar">
    <Logo />
    <div className="block-menu-block">
      <ul>
        <li className="leaf menu-mlid-394"><a href="/purchase" title="Purchase a copy of the book">Purchase a Copy</a></li>
        <li className="expanded"><a href="/ongoing-conversation" title="">An Ongoing Conversation: More Stories and Images</a>
          <ul className="menu">
            <li className="leaf"><a href="/timeframes/pre-1912_through_1947" title="">Pre-1912 through 1947</a></li>
            <li className="leaf"><a href="/timeframes/1947-1965" title="">1947-1965</a></li>
            <li className="leaf"><a href="/timeframes/1965-1972">1965-1972</a></li>
            <li className="leaf"><a href="/timeframes/1972-1990">1972-1990</a></li>
            <li className="leaf"><a href="/timeframes/1990-1999">1990-1999</a></li>
            <li className="leaf"><a href="/timeframes/1999-present">1999-present</a></li>
          </ul>
        </li>
        <li className="leaf"><a href="/add-content" title="Add Your Own">Add Your Own</a></li>
        <li className="leaf"><a href="http://www.keswick.com" title="Visit and make new memories">Make a Reservation at Keswick Hall</a></li>
        <li className="leaf"><a href="/authorinfo">About the Author</a></li>
      </ul>
    </div>
  </div>
)

export default Sidebar