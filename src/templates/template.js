import React from 'react';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="content node-type-historical-content">
      <div id="node-7" className="node node-historical-content clearfix" about={post.frontmatter.path} typeof="sioc:Item foaf:Document">
        <h2 property="dc:title" datatype="">
          <a href={post.frontmatter.path}>{post.frontmatter.title}</a>
        </h2>
        <div className="content">
          <div className="field field-name-field-timeframe field-type-list-text field-label-hidden">
            <div className="field-items">
              <div className="field-item even">{post.frontmatter.year}</div>
            </div>
          </div>
          <div className="field field-name-body field-type-text-with-summary field-label-hidden">
            <div className="field-items">
              <div className="field-item even" property="content:encoded">
                <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}