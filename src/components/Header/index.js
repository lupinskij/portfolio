import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import src from './images/jeff-lupinski-logo.svg'
import { Image } from 'components'

const StyledImage = styled(props => <Image {...props} />)`
  margin: 0;
  max-width: 100%;
`

const Header = props => (
  <header className="pr-header absolute top-0 left-0 right-0 pt4 ph4 ph5-l z-999 flex justify-between items-center monospace f7 lh-header">
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
          className="black header-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>
      </li>
      <li>
        <a
          href="https://github.com/lupinskij"
          className="black header-link"
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
          className="black header-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/jefflupinski"
          className="black header-link"
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
)

export default Header
