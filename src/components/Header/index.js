import { Link } from 'gatsby'
import React from 'react'

const Header = props => (
  <header className="pr-header absolute top-0 left-0 right-0 pt4 ph4 ph5-l flex justify-between items-center monospace f7 lh-header ttu tracked">
    <div>
      <Link to="/" className="black">
        Jeff Lupinski
      </Link>
      <div className="o-50">Digital Designer</div>
    </div>
    <div className="dn-ns tr">
      <Link to="#about" className="black trans-link">
        Info
      </Link>
      <ul className="o-50">
        <li className="dib">
          <a href="mailto:hello@jefflupinski.com" className="black trans-link">
            Email
          </a>
        </li>
        <li className="dib">
          <a
            href="https://www.linkedin.com/in/jefflupinski"
            className="black trans-link ml4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="dib">
          <a
            href="https://dribbble.com/jefflupinski"
            className="black trans-link ml4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
