import React, { Component } from 'react'
import Link from 'gatsby-link'

const NavLink = props => {
  if (!props.test) {
    return (
      <Link className={props.className} to={props.url}>
        {props.text}
      </Link>
    )
  } else {
    return <span>{props.text}</span>
  }
}

function PostListItem({ node }) {
  return (
    <div key={node.id} className="views-row node">
      <h2>
        <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
      </h2>

      <div className="content">
        <div className="field-name-field-timeframe">
          {node.frontmatter.year}
        </div>
        <div className="field-name-body">
          <p>{node.excerpt}</p>
        </div>
      </div>

      <ul className="links inline">
        <li>
          <a href={node.frontmatter.path} title={node.frontmatter.title}>
            Read more
          </a>
        </li>
      </ul>
    </div>
  )
}

function PaginationControls({ pathContext }) {
  const { index, first, last, pageCount } = pathContext
  const pathPrefix = '/ongoing-conversation'
  const previousUrl = `${pathPrefix}/${
    index - 1 == 1 ? '' : (index - 1).toString()
  }`
  const nextUrl = `${pathPrefix}/${(index + 1).toString()}`
  const firstUrl = pathPrefix
  const lastUrl = `${pathPrefix}/${pageCount.toString()}`

  const pageUrls = [pathPrefix]
  for (let i = 2; i <= pageCount; i++) {
    pageUrls.push(`${pathPrefix}/${i.toString()}`)
  }

  return (
    <div>
      <div className="item-list">
        <ul className="pager">
          <li>
            <NavLink
              test={first}
              url={firstUrl}
              text={'« first'}
              title={'Go to first page'}
              className={'active'}
            />
          </li>
          <li>
            <NavLink
              test={first}
              url={previousUrl}
              text={'‹ previous'}
              title={'Go to previous page'}
              className={'active'}
            />
          </li>

          {Array.from(Array(pageCount).keys()).map(
            key =>
              key + 1 != index ? (
                <li>
                  <NavLink
                    test={false}
                    url={pageUrls[key]}
                    text={key + 1}
                    title={`Go to page ${key + 1}`}
                    className={'active'}
                  />
                </li>
              ) : (
                <li className="pager-current">
                  <span>{key + 1}</span>
                </li>
              )
          )}

          <li>
            <NavLink
              test={last}
              url={nextUrl}
              text={'next ›'}
              title={'Go to next page'}
              className={'active'}
            />
          </li>
          <li>
            <NavLink
              test={last}
              url={lastUrl}
              text={'last »'}
              title={'Go to last page'}
              className={'active'}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

const IndexPage = ({ data, pathContext }) => {
  const { group, pageCount } = pathContext

  return (
    <div>
      <div className="node-type-historical-content">
        {group.map(PostListItem)}
      </div>
      <PaginationControls pathContext={pathContext} />
    </div>
  )
}
export default IndexPage
