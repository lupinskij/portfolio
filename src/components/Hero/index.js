import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SplitText } from './SplitText'
import { AnimatePresence, motion } from 'framer-motion'

const StyledHero = styled.div`
  // ns
  @media screen and (min-width: 30em) {
    padding-left: 14.2vw;
  }
`

function Hero({ title }) {
  return (
    <div className="relative">
      <StyledHero className="Hero relative flex flex-column flex-row-l justify-end justify-middle-l items-center-l">
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
      <div className="pr-header f7 absolute bottom-0 left-0 right-0 pb4 ph4 ph5-l flex justify-between fw6">
        <div className="db f3 lh-8 grid1 fw7">(‘17–2021)</div>
        <div className="db f3 lh-8 grid2 fw7">
          Selected
          <br />
          Works
        </div>
        <div className="db f6 lh-solid grid4 mv0 w-50">
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
