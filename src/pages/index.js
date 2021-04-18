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
    <Hero title="I am a digital designer currently living in Colorado. I focus on user interface and experience design, interaction design, and digital product design." />
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
