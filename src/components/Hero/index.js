import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SplitText } from './SplitText'
import { AnimatePresence, motion } from 'framer-motion'

const StyledHero = styled.div`
  // ns
  @media screen and (min-width: 30em) {
    padding-top: 21vw;
    padding-bottom: 8vw;
  }
`

function Hero({ title, paragraph }) {
  return (
    <StyledHero className="Hero ph4 ph5-l pv4 pv5-ns relative flex flex-column flex-row-l justify-end justify-between-l items-end-l">
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

      <div className="hero-intro pt3 pb4 pr4 mw-100 mw6-m w-30-l">
        <AnimatePresence>
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <SplitText
              initial={{ y: '100%' }}
              animate="visible"
              variants={{
                visible: i => ({
                  y: 0,
                  transition: {
                    ease: [0.25, 0.46, 0.45, 0.94],
                    duration: 0.5,
                    delay: 1.5,
                  },
                }),
              }}
            >
              {paragraph}
            </SplitText>
          </motion.div>
        </AnimatePresence>
      </div>
    </StyledHero>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
}

export default Hero
