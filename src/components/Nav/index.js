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
          <Link to="www.dribbble.com" className="black nav-link">
            Dribbble
          </Link>
        </li>
        <li>
          <Link to="www.github.com" className="black nav-link">
            GitHub
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="www.linkedin.com" className="black nav-link">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link to="www.twitter.com" className="black nav-link">
            Twitter
          </Link>
        </li>
      </ul>
      <Link to="/">
        <StyledImage src={require('./images/jeff-lupinski-logo.svg')} />
      </Link>
    </header>
  )
}

export default Nav
