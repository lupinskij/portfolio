import React from 'react'
import {
  AMC,
  Peddle,
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
      title="Jeff Lupinski — Digital Designer"
      keywords={[
        `Jeff Lupinski`,
        `Designer`,
        `Colorado`,
        `UX`,
        `UI`,
        `Digital Products`,
        `Digital Experiences`,
        `Interfaces`,
        `Interaction`,
        `Strategy`,
      ]}
    />
    <Hero
      title="I design interfaces."
      paragraph="I am a digital designer living in Colorado. I&nbsp;design, lead, and help build solutions for digital products and experiences."
    />
    <NavController>
      <ScrollSection>
        <UnderArmour />
      </ScrollSection>
      <ScrollSection>
        <AMC />
      </ScrollSection>
      <ScrollSection>
        <Peddle />
      </ScrollSection>
    </NavController>
    <Footer />
  </Layout>
)

export default IndexPage
