import React from 'react'

const Footer = () => (
  <footer className="bg-black">
    <nav className="pt6 pb5 ph4 ph5-l flex justify-between items-center monospace f7 lh-nav white-40">
      <div className="self-start">
        &copy; {new Date().getFullYear()} Jeff Lupinski
      </div>
      <ul className="dn-ns">
        <li>
          <a href="https://dribbble.com/jefflupinski" className="white-40">
            Dribbble
          </a>
        </li>
        <li>
          <a href="https://github.com/lupinskij" className="white-40">
            GitHub
          </a>
        </li>
      </ul>
      <ul className="dn-ns">
        <li>
          <a
            href="https://www.linkedin.com/in/jefflupinski"
            className="white-40"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jefflupinski" className="white-40">
            Twitter
          </a>
        </li>
      </ul>
      <div className="self-start">
        <a href="mailto:iam@jefflupinski.com" className="white-40">
          iam@jefflupinski.com
        </a>
      </div>
    </nav>
  </footer>
)

export default Footer
