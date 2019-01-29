import React from 'react'
import Stagger from 'react-stagger'

import { Layout, Hero, SEO } from 'components'

const IndexPage = ({ isReady }) => (
  <Stagger in={isReady}>
    <Layout>
      <SEO title="Home" keywords={[`jeff lupinski`, `design`, `product`]} />
      <Hero title="Designer crafting digital experiences with thoughtful brand aesthetics." />
    </Layout>
  </Stagger>
)

export default IndexPage
