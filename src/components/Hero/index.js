import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SplitText } from './SplitText'
import { AnimatePresence, motion } from 'framer-motion'

const StyledHero = styled.div`
  // ns
  @media screen and (min-width: 30em) {
    padding-left: 15.2vw;
  }
`

function Hero({ title }) {
  return (
    <div className="relative">
      <StyledHero className="hero ph4 pt6 pt4-l relative flex flex-column flex-row-l justify-center items-center justify-end-l justify-middle-l">
        <div className="hero-title mw-100 mw8-m w-two-thirds-l">
          <AnimatePresence>
            <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
              <SplitText
                initial={{ y: '100%', rotateY: -45, opacity: 1 }}
                animate="visible"
                variants={{
                  visible: i => ({
                    y: 0,
                    rotateY: 0,
                    opacity: 1,
                    transition: {
                      ease: [0.16, 1, 0.3, 1],
                      duration: 2,
                      delay: 1,
                    },
                  }),
                }}
              >
                {title}
              </SplitText>
            </motion.div>
          </AnimatePresence>
        </div>
      </StyledHero>
      <div className="pr-header absolute bottom-0 left-0 right-0 pb4 ph4 ph5-l flex justify-between f7 fw6">
        <div className="dn db-ns hero-grid-1 f3 f2-l fw6 lh-tighter tracked-tighten">
          (‘17–2021)
        </div>
        <div className="db hero-grid-2 f3 f2-l fw6 lh-tighter tracked-tighten">
          Selected
          <br />
          Works
        </div>
        <div className="dn db-ns hero-grid-4 mv0 w-50 f6 fw5 tracked lh-solid">
          Combining aesthetics and functionality
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
}

export default Hero
