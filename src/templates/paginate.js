import React, { Component } from "react";
import Link from "gatsby-link";

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

function PostListItem({ node }) {
  return (
    <div key={node.id} className="blogListing">
      <div className="date">{node.frontmatter.date}</div>
      <div>{node.excerpt}</div>
      <Link className="blogUrl" to={node.frontmatter.path}>
        {node.frontmatter.title}
      </Link>
    </div>
  );
}

function PaginationControls({ pathContext }) {
  const { index, first, last } = pathContext;
  const pathPrefix = '/ongoing-conversation';
  const previousUrl = `${pathPrefix}/${index - 1 == 1 ? "" : (index - 1).toString()}`;
  const nextUrl = `${pathPrefix}/${(index + 1).toString()}`;

  return (
    <div>
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </div>
  );
}

const IndexPage = ({ data, pathContext }) => {
  const { group, pageCount } = pathContext;

  return (
    <div>
      <h4>{pageCount} Posts</h4>

      {group.map(PostListItem)}

      <PaginationControls pathContext={pathContext} />
    </div>
  );
};
export default IndexPage;
