import React from 'react';

export default function InfoCard(props) {
  const insights = props['insights']
  return (
    <div id='temp' className="feature col">
      <h4>{ insights['title'] }</h4>
      <h2>{ insights['num'] }</h2>
      <p>{ insights['desc'] }</p>
    </div>
  )
}

