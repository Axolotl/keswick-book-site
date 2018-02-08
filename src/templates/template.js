import React from 'react';
//import Helmet from 'react-helmet';
// import '../css/blog-post.css';

import Link from 'gatsby-link';


const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url} className="pagination-item">{props.text}</Link>;
  } else {
    return <span className="pagination-item">{props.text}</span>;
  }
};

export default ({data, pathContext}) => {
  const { group, index, first, last } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <div>
      {group.map(({ node }, idx) => (
        <div className="post" key={idx}>
          <Link to={node.fields.slug} className="post-title">
            {node.fields.title}
          </Link>
          <span className="post-date">{node.fields.date}</span>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <Link to={node.fields.slug}>Read More ></Link>
        </div>
      ))}
      <div className="pagination">
        <NavLink test={last} url={nextUrl} text="Older" />
        <NavLink test={first} url={previousUrl} text="Newer" />
      </div>
    </div>
  );
}



/*export default function Template({ data }) {
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

*/

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        year
        title
      }
    }
  }
`;
