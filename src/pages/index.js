import React from 'react'

import Layout from '../components/layout'
import Product from '../components/product'

const IndexPage = () => (
  <Layout>
    <div className="columns">
      <div className="column">
        <Product></Product>
      </div>
      <div className="column">
        <Product></Product>
      </div>
    </div>
  </Layout>
)

export default IndexPage
