import { Link } from 'gatsby'
import React from 'react'

function refreshTime() {
  const timeDisplay = document.getElementById('time')
  const dateString = new Date().toLocaleString('en-US', {
    timeZone: 'America/Denver',
    hour: 'numeric',
    minute: 'numeric',
  })
  const formattedString = dateString.replace(', ', ' - ')
  timeDisplay.textContent = formattedString
}
setInterval(refreshTime, 1000)

const Header = props => (
  <header className="pr-header absolute top-0 left-0 right-0 pt4 ph4 ph5-l flex justify-between items-center monospace f7 lh-header ttu tracked">
    <div>
      <Link to="/" className="black">
        Jeff Lupinski
      </Link>
      <div className="o-50">
        Denver_CO <span id="time"></span>
      </div>
    </div>
    <div className="dn-ns tr">
      <Link to="#about" className="black trans-link">
        About
      </Link>
      <ul className="flex">
        <li className="inline-flex relative items-center">
          <a
            href="mailto:hello@jefflupinski.com"
            className="dib relative black trans-link o-50"
          >
            Email
          </a>
          <i className="inline-flex relative i-arrow">
            <svg
              viewBox="0 0 7 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
                fill="#2c2c2c"
              ></path>
            </svg>
          </i>
        </li>
        <li className="inline-flex relative items-center">
          <a
            href="https://www.linkedin.com/in/jefflupinski"
            className="black trans-link ml4 o-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <i className="inline-flex relative i-arrow">
            <svg
              viewBox="0 0 7 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
                fill="#2c2c2c"
              ></path>
            </svg>
          </i>
        </li>
        <li className="inline-flex relative items-center">
          <a
            href="https://dribbble.com/jefflupinski"
            className="black trans-link ml4 o-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          <i className="inline-flex relative i-arrow">
            <svg
              viewBox="0 0 7 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
                fill="#2c2c2c"
              ></path>
            </svg>
          </i>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
