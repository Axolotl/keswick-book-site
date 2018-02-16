import React, { Component } from "react";
import Link from "gatsby-link";

const NavLink = props => {
  if (!props.test) {
    return <Link className={props.className} to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>
  }
};


function PostListItem({ node }) {
  return (
    <div key={node.id} className="views-row views-row-1 views-row-odd views-row-first">
      <div className="node node-historical-content node-teaser clearfix" about={node.frontmatter.path} typeof="sioc:Item foaf:Document">
        <h2 property="dc:title" datatype="">
          <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
        </h2>
        <div className="content">
          <div className="field field-name-field-timeframe field-type-list-text field-label-hidden">
            <div className="field-items">
              <div className="field-item even">{node.frontmatter.year}</div>
            </div>
          </div>
          <div className="field field-name-body field-type-text-with-summary field-label-hidden">
            <div className="field-items">
              <div className="field-item even" property="content:encoded">
                <p>{node.excerpt}</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="links inline">
          <li className="node-readmore first last">
            <a href={node.frontmatter.path} rel="tag" title={node.frontmatter.title}>Read more</a>
          </li>
        </ul>

      </div>  
    </div>
  );
}

function PaginationControls({ pathContext }) {
  const { index, first, last, pageCount } = pathContext;
  const pathPrefix = '/ongoing-conversation';
  const previousUrl = `${pathPrefix}/${index - 1 == 1 ? "" : (index - 1).toString()}`;
  const nextUrl = `${pathPrefix}/${(index + 1).toString()}`;
  const firstUrl = pathPrefix;
  const lastUrl = `${pathPrefix}/${(pageCount).toString()}`;

  const pageUrls = [ pathPrefix ];
  for (let i=2; i<=pageCount; i++) {
    pageUrls.push(`${pathPrefix}/${(i).toString()}`);
  }

  return (
    <div>

      <h2 className="element-invisible">Pages</h2>
      <div className="item-list">
        <ul className="pager">
          <li className="pager-first first">
            <NavLink test={first} url={firstUrl} text={"« first"} title={"Go to first page"} className={"active"} />
          </li>
          <li className="pager-previous">
            <NavLink test={first} url={previousUrl} text={"‹ previous"} title={"Go to previous page"} className={"active"} />
          </li>

          {Array.from(Array(pageCount).keys()).map(key => 
              (key+1) != index ?
                  <li className="pager-item">
                    <NavLink 
                      test={false} 
                      url={pageUrls[key]} 
                      text={key+1} 
                      title={`Go to page ${key+1}`} 
                      className={"active"} />
                  </li> : 
                  <li className="pager-current">
                    <span>{key+1}</span>
                  </li>
          )}


          {/*<li className="pager-item">
            <a href="/ongoing-conversation" title="Go to page 1" className="active">1</a>
          </li>
          <li className="pager-current">2</li>
          <li className="pager-item">
            <a href="/ongoing-conversation?page=2" title="Go to page 3" className="active">3</a>
          </li>*/}

          <li className="pager-next">
            <NavLink test={last} url={nextUrl} text={"next ›"} title={"Go to next page"} className={"active"} />
          </li>
          <li className="pager-last last">
            <NavLink test={last} url={lastUrl} text={"last »"} title={"Go to last page"} className={"active"} />
          </li>
        </ul>
      </div>  

    </div>
  );
}

const IndexPage = ({ data, pathContext }) => {
  const { group, pageCount } = pathContext;

  return (
    <div>
      <div className="content node-type-historical-content">
        <div className="view view-ongoing-conversation view-id-ongoing_conversation view-display-id-page view-dom-id-1">
          <div className="view-content">

          {group.map(PostListItem)}

          </div>
        </div>
      </div>

    {/*testing where pagination controls should go in the div structure*/}

      <PaginationControls pathContext={pathContext} />
    </div>
  );
};
export default IndexPage;