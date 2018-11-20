import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="columns">
      <div className="column">
        <h1 className="title"><strong>Product title</strong></h1>
        <div className="bg-img-container random-bg-img"></div>
        <div className="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta placerat felis, id auctor sapien consectetur et. Donec blandit erat non nibh ornare, ac lacinia magna dignissim. Donec vehicula tempor leo.</p>
          <div className="buttons">
            <a className="button is-primary is-medium">Buy</a>
            <a className="button is-primary is-outlined is-medium">Recommendations</a>
          </div>
        </div>
      </div>
      <div className="column">
        <h1 className="title"><strong>Product title</strong></h1>
        <div className="bg-img-container random-bg-img"></div>
        <div className="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta placerat felis, id auctor sapien consectetur et. Donec blandit erat non nibh ornare, ac lacinia magna dignissim. Donec vehicula tempor leo.</p>
          <div className="buttons">
            <a className="button is-primary is-medium">Buy</a>
            <a className="button is-primary is-outlined is-medium">Recommendations</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
