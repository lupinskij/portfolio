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

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const IndexPage = () => {
  // Initialize Lenis within a hook to safe-guard against Gatsby SSR build issues
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
      allowNestedScroll: true,
      naiveDimensions: true,
      stopInertiaOnNavigate: true,
    })

    // Clean up the instance on component unmount
    return () => {
      lenis.destroy()
    }
  }, []) // Empty dependency array ensures this runs once when the page mounts

  return (
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
}

export default IndexPage
