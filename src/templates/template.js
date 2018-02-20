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
                {post.frontmatter.image && 
                  <span>
                    <br />
                    <img src={post.frontmatter.image.childImageSharp.resize.src} title={post.frontmatter.imagetitle} />
                  </span>
                }
              </div>
            </div>
          </div>  
          <div className="field field-name-field-user-name field-type-text field-label-hidden">
            <div className="field-items">
              <div className="field-item even">{post.frontmatter.author}
              </div>
            </div>
          </div> 
          <div className="field field-name-field-publication-name field-type-text field-label-hidden">
            <div className="field-items">
              <div className="field-item even">{post.frontmatter.publication}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
        frontmatter {
          path
          year
          title
          image {
            childImageSharp {
              resize(width: 400) {
                src
              }
            }
          }
          imagetitle
          author
          publication
        }
    }
  }`