import React from 'react'
import Link from 'gatsby-link'

export default function OngoingConversation({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="content node-type-historical-content">
      <div className="view view-ongoing-conversation view-id-ongoing_conversation view-display-id-page view-dom-id-1">
        <div className="view-content">
          {posts
            .filter(post => post.node.frontmatter.title.lenth > 0)
            .map(({ node: post }) => { 
              return (

                <div className="views-row views-row-1 views-row-odd views-row-first">
                  <div key={post.id} className="node node-historical-content node-teaser clearfix" about={post.frontmatter.path} typeof="sioc:Item foaf:Document">
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
                            <p>{post.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="links inline">
                      <li className="node-readmore first last">
                        <a href={post.frontmatter.path} rel="tag" title={post.frontmatter.title}>Read more<span className="element-invisible"> about {post.frontmatter.title}</span></a>
                      </li>
                    </ul>

                  </div>  
                </div>

              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___year] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            year
            path
          }
        }
      }
    }
  }
`;