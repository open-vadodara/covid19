import React from 'react';
import logo from'../images/Asset_1.svg';

export default function Nav() {
  return (
    <div className="container-fluid">
      <a className="navbar-brand" href={window.location.protocol + '//' + window.location.host + '/'}>
        <img src={ logo } alt="" width="20" height="20" className="d-inline-block align-text-top mx-2" />
        Covid19
      </a>
    </div>
  )
}