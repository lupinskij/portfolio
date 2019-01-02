import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  margin: 0;
  max-width: 100%;
`

function Nav() {
  return (
    <header className="pr-nav absolute top-2 left-0 right-0 ph5 z-999 flex justify-between items-center monospace f7 lh-nav">
      <div>
        <Link to="/" className="black">
          Jeff Lupinski
        </Link>
        <div className="gray">Digital Product Designer</div>
      </div>
      <ul>
        <li>
          <a
            href="https://dribbble.com/jefflupinski"
            className="black nav-link"
          >
            Dribbble
          </a>
        </li>
        <li>
          <a href="https://github.com/lupinskij" className="black nav-link">
            GitHub
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jefflupinski"
            className="black nav-link"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jefflupinski" className="black nav-link">
            Twitter
          </a>
        </li>
      </ul>
      <Link to="/">
        <StyledImage src={require('./images/jeff-lupinski-logo.svg')} />
      </Link>
    </header>
  )
}

export default Nav
