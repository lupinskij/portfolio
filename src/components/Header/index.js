import { Link } from 'gatsby'
import React from 'react'

const Header = props => (
  <header className="pr-header absolute top-0 left-0 right-0 pt4 ph4 ph5-l flex justify-between items-center monospace f7 lh-header ttu tracked">
    <div>
      <div className="tr">
        <span className="circle"></span>
        <Link to="/" className="black">
          Jeff Lupinski
        </Link>
      </div>
      <div className="o-40">
        {new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })}
      </div>
    </div>
    <div className="dn-ns tr">
      <Link to="#about" className="black trans-link">
        Info
      </Link>
      <ul className="o-40">
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
