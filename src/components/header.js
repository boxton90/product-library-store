import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 1
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.45rem',
      }}
    >
      <h1 className="title has-text-white">
        {siteTitle}
      </h1>
    </div>
  </div>
)

export default Header
