import React from 'react'
import Stagger from 'react-stagger'

import { Layout, Hero, Image, SEO } from 'components'

const IndexPage = ({ isReady }) => (
  <Stagger in={isReady}>
    <Layout>
      <SEO title="Home" keywords={[`jeff lupinski`, `design`, `product`]} />
      <Hero title="I design thoughtful digital experiences with beautiful brand aesthetics." />
    </Layout>
  </Stagger>
)

export default IndexPage
