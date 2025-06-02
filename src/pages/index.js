import React from 'react'
import {
  Header,
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
      title="Jeff Lupinski &mdash; Digital Designer"
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
        `Design Direction`,
        `Art Direction`,
        `Creative Direction`,
      ]}
    />
    <Header />
    <Hero title="Independent Designer and Art Director currently living in Denver, Colorado." />
    <NavController>
      <ScrollSection>
        <AMC />
      </ScrollSection>
      <ScrollSection>
        <SevenEleven />
      </ScrollSection>
      <ScrollSection>
        <Peddle />
      </ScrollSection>
      <ScrollSection>
        <UnderArmour />
      </ScrollSection>
    </NavController>
    <Footer />
  </Layout>
)

export default IndexPage
