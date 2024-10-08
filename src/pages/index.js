import React from 'react'
import {
  AMC,
  SevenEleven,
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
    <Hero title="Jeff Lupinski" />
    <NavController>
      <ScrollSection>
        <AMC />
      </ScrollSection>
      <ScrollSection>
        <SevenEleven />
      </ScrollSection>
      <ScrollSection>
        <UnderArmour />
      </ScrollSection>
      <ScrollSection>
        <Peddle />
      </ScrollSection>
    </NavController>
    <Footer />
  </Layout>
)

export default IndexPage
