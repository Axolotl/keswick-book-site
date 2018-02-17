import React from 'react';


const timeframes = [
  {
    year: 'pre-1912 through 1947',
    slug: 'timeframes/pre-1912_through_1947',
  },
  {
    year: '1947-1965',
    slug: 'timeframes/1947-1965',
  },
  {
    year: '1965-1972',
    slug: 'timeframes/1965-1972',
  },
  {
    year: '1972-1990',
    slug: 'timeframes/1972-1990',
  },
  {
    year: '1990-1999',
    slug: 'timeframes/1990-1999',
  },
  {
    year: '1999-present',
    slug: 'timeframes/1999-present',
  },
];
  
function filterDataByTimeframe(year, data) {
  return data.filter(item => {
    return (item.year == year)
  });
}
  
export default function TimeframePages({ data }) {
  timeframes.forEach(timeframe => {
    const filteredData = filterDataByTimeframe(timeframe.year, data.allMarkdownRemark.edges);
    createPaginatedPages({
      pathPrefix: timeframe.slug,
      edges: filteredData,
    });
  });
}