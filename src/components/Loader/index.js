import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SplitText } from './SplitText'
import { motion } from 'framer-motion'

const StyledLoader = styled.div`
  height: 100%;
  pointer-events: none;
`

const curtain = {
  backgroundColor: '#21201f',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  transformOrigin: '50% 0%',
  width: '100%',
}

const name = {
  height: '100%',
  marginTop: '1.5rem',
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  width: '100%',
}

const text = {
  color: '#ffffff',
  fontSize: '1.42rem',
  fontWeight: '600',
  letterSpacing: '-0.02em',
  lineHeight: '1.18',
}

function Loader({ title }) {
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
    <StyledLoader className="fixed absolute--fill w-100 z-max">
      <motion.div
        style={curtain}
        initial={{ height: '100%' }}
        animate={isLoaded ? { height: 0 } : {}}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0.5, 0, 0, 1],
        }}
      >
        <motion.div
          class="ph4 ph5-l"
          style={name}
          initial={{ transform: 'translate(0, 0)' }}
          animate={isLoaded ? { transform: 'translate(0, -50%)' } : {}}
          transition={{
            duration: 2,
            delay: 1,
            ease: [0.5, 0, 0, 1],
          }}
        >
          {isLoaded && (
            <motion.div
              style={text}
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
                      ease: [0.16, 1, 0.3, 1],
                      duration: 1,
                      delay: 0.5,
                    },
                  }),
                }}
              >
                {title}
              </SplitText>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </StyledLoader>
  )
}

Loader.propTypes = {
  title: PropTypes.string,
}

export default Loader
