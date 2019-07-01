import React from 'react'
import {
  AMC,
  Chewsi,
  Footer,
  Hero,
  Layout,
  ScrollSection,
  SEO,
  UnderArmour,
} from 'components'
import NavController from 'components/Nav/NavController'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Jeff Lupinski — Product Designer"
      keywords={[`jeff lupinski`, `design`, `product`]}
    />
    <Hero title="Crafting thoughtful digital experiences through visual &amp; coded solutions." />
    <NavController>
      <ScrollSection>
        <UnderArmour />
      </ScrollSection>
      <ScrollSection>
        <AMC />
      </ScrollSection>
      <ScrollSection>
        <Chewsi />
      </ScrollSection>
    </NavController>
    <Footer />
  </Layout>
)

export default IndexPage
