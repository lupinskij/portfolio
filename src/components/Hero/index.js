import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SplitText } from './SplitText'
import { AnimatePresence, motion } from 'framer-motion'

const StyledHero = styled.div`
  // ns
  @media screen and (min-width: 30em) {
    padding-top: 16vw;
    padding-bottom: 9vw;
  }
`

function Hero({ title }) {
  return (
    <StyledHero className="Hero ph4 ph5-l pv5 relative flex items-center items-end-l">
      <div className="mw-100 mw8-m mw9-l">
        <AnimatePresence>
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <SplitText
              initial={{ y: '100%' }}
              animate="visible"
              variants={{
                visible: i => ({
                  y: 0,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.5,
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
  )
}

Hero.propTypes = {
  title: PropTypes.string,
}

export default Hero
