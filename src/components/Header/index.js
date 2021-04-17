import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import src from './images/jeff-lupinski-logo.svg'
import { Image } from 'components'

const StyledImage = styled(props => <Image {...props} />)`
  margin: 0;
  max-width: 100%;
`

const Header = props => (
  <motion.div
    initial={{ y: '-150' }}
    animate={{ y: 0 }}
    transition={{
      ease: 'easeOut',
      duration: 0.8,
      delay: 0.7,
    }}
    className="relative z-999"
  >
    <header className="absolute top-0 left-0 right-0 pt4 ph4 ph5-l flex justify-between items-center monospace f7 lh-header">
      <div>
        <Link to="/" className="black">
          Jeff Lupinski
        </Link>
        <div className="gray">Digital Product Designer</div>
      </div>
      <ul className="dn-ns">
        <li>
          <a
            href="https://dribbble.com/jefflupinski"
            className="black trans-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lupinskij"
            className="black trans-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <ul className="dn-ns">
        <li>
          <a
            href="https://www.linkedin.com/in/jefflupinski"
            className="black trans-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/jefflupinski"
            className="black trans-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
      <Link to="/" className="dn-ns">
        <StyledImage image={src} alt="Jeff Lupinski" {...props} />
      </Link>
    </header>
  </motion.div>
)

export default Header
