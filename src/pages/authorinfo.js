import React from 'react'
import Link from 'gatsby-link'

import authorimage from "../images/content/pmc\ photo\ 2.jpeg"

const AuthorPage = () => (
  <div className="content">
    <div className="field field-name-field-page-image field-type-image field-label-hidden">
      <div className="field-items">
        <div className="field-item even">
          <img typeof="foaf:Image" src={authorimage} alt="" />
        </div>
      </div>
    </div>
    <div className="field field-name-body field-type-text-with-summary field-label-hidden">
      <div className="field-items">
        <div className="field-item even" property="content:encoded">
          <p>In the summer of 2008, while Patricia Castelli managed breakfast and lunch service at Keswick Hall, she also began researching the history of the property. Prompted by many guests' questions ("Can you tell us anything about the history of this place?") and by many guest comments ("I remember when this was the clubhouse!"), she interviewed Bob Reid, who was the club's tennis pro from 1965-1972. Mr. Reid kindly provided the first photos and newspaper articles, and shared his memories. Almost three years and countless questions and answers later, she unveiled <i>The Story of Keswick Hall</i>.</p>
          <p>Patricia continues to work at Keswick Hall &amp; Golf Club, a Forbes five-star resort. As its Resident Historian, she gives tours of the property and group presentations upon request and happily brings alive the fascinating stories of former residents, club members, owners and staff. Robert Engstrom of Sandy Springs, Georgia, remarked after one such tour on her "informative, passionate insight into the magic of Keswick." As the resort's Director of Quality and Communication, she oversees adherence to five-star service standards and the production of materials that beautifully represent not only the history but also the exceptional experience today's guests can enjoy.  Patricia lives in Keswick, enjoys the view of the Southwest Mountains from her own property, and plays tennis when she can.</p>
          <p>To make arrangements for a tour or presentation, please contact Patricia by <a href="mailto:papershoepress@gmail.com?subject=Keswick%20Inquiry">email</a>.</p>
        </div>
      </div>
    </div>  
  </div>
)

export default AuthorPage
