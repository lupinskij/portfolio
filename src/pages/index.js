import React from 'react'
import { Layout, Hero, SEO, UnderArmour } from 'components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jeff lupinski`, `design`, `product`]} />
    <Hero title="Crafting thoughtful digital experiences with delightful brand aesthetics." />
    <UnderArmour />
  </Layout>
)

export default IndexPage
