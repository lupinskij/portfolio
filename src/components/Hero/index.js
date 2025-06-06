import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { SplitText } from './SplitText'
import { motion } from 'framer-motion'

function Hero({ title }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true)
    }

    if (document.readyState === 'complete') {
      setIsLoaded(true)
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div>
      {isLoaded && (
        <motion.div
          class="flex flex-column justify-center justify-end-ns relative mw-100 mw8-m w-two-thirds-l pl4 pl5-l pr4 pr0-l pv6"
          initial={{ minHeight: '100vh' }}
          animate={isLoaded ? { minHeight: '90vh' } : {}}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0.28, 0.44, 0.49, 1],
          }}
        >
          <motion.div
            class="hero-text"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <SplitText
              initial={{ y: '100%', opacity: 1 }}
              animate="visible"
              variants={{
                visible: i => ({
                  y: 0,
                  opacity: 1,
                  transition: {
                    ease: [0.5, 0, 0, 1],
                    duration: 1.8,
                    delay: 1.2,
                  },
                }),
              }}
            >
              {title}
            </SplitText>
          </motion.div>
          <motion.div
            class="subtext flex items-center mt3 mt4-l"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <SplitText
              initial={{ y: '100%', opacity: 1 }}
              animate="visible"
              variants={{
                visible: i => ({
                  y: 0,
                  opacity: 1,
                  transition: {
                    ease: [0.5, 0, 0, 1],
                    duration: 1.8,
                    delay: 1.5,
                  },
                }),
              }}
            >
              * Available for freelance worldwide.
            </SplitText>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
}

export default Hero
