import React from 'react'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div className="node-type-historical-content">
      <div className="node">
        {/*something about the h2 a configuration is styled*/}
        <h2>
          <a href={post.frontmatter.path}>{post.frontmatter.title}</a>
        </h2>
        {/*this content is actually necessary for once*/}
        <div className="content">
          <div className="field-name-field-timeframe">
            {post.frontmatter.year}
          </div>
          <div className="field-name-body">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {post.frontmatter.image && (
              <span>
                <br />
                <img
                  src={post.frontmatter.image.childImageSharp.resize.src}
                  title={post.frontmatter.imagetitle}
                />
              </span>
            )}
          </div>
          {post.frontmatter.author && (
            <div className="field-name-field-user-name">
              {post.frontmatter.author}
            </div>
          )}
          {post.frontmatter.publication && (
            <div className="field-name-field-publication-name">
              {post.frontmatter.publication}
            </div>
          )}
        </div>
      </div>
    </div>
  )
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
  }
`
