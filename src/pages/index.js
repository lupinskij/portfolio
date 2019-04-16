import React from 'react'
import { Layout, Hero, SEO, UnderArmour, AMC, Chewsi, Footer } from 'components'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Jeff Lupinski — Product Designer"
      keywords={[`jeff lupinski`, `design`, `product`]}
    />
    <Hero title="Crafting thoughtful digital experiences through visual &amp; coded solutions." />
    <UnderArmour />
    <AMC />
    <Chewsi />
    <Footer />
  </Layout>
)

export default IndexPage
