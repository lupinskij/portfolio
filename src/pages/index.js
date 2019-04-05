import React from 'react'
import { Layout, Hero, SEO, UnderArmour, AMC, Footer } from 'components'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Jeff Lupinski — Product Designer"
      keywords={[`jeff lupinski`, `design`, `product`]}
    />
    <Hero title="Crafting thoughtful digital experiences with delightful brand aesthetics." />
    <UnderArmour />
    <AMC />
    <Footer />
  </Layout>
)

export default IndexPage
