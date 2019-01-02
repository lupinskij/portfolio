import React from 'react'

import { Layout, Hero, Image, SEO } from 'components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jeff lupinski`, `design`, `product`]} />
    <Hero title="I design thoughtful digital experiences with beautiful brand aesthetics." />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
