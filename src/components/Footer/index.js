import React from 'react'

const Footer = props => (
  <section className="bg-black">
    <div className="wrap-pres">
      <div className="mb5">
        <h3 className="f6 mt2 pt1 light-gray fw4 mb2 monospace">
          &#11096;&nbsp;&nbsp;&nbsp;Info
        </h3>
        <p className="white ma0">
          Digital designer currently living in Colorado. Focused on designing
          digital products and interactive experiences. I enjoy working closely
          with teams to create thoughtful and intuitive solutions for problems
          of all sizes.
        </p>
      </div>
      <div className="mb5">
        <h3 className="f6 mt2 pt1 light-gray fw4 mb2 monospace">
          &#11096;&nbsp;&nbsp;&nbsp;Work
        </h3>
        <p className="white ma0">
          Contributed to projects for Under&nbsp;Armour, AMC&nbsp;Television,
          Specialized&nbsp;Bicycles, Ueno, Instrument, Epic&nbsp;Games,
          CVS&nbsp;Pharmacy, AT&amp;T, Dell&nbsp;EMC, Zwift, United&nbsp;Way,
          Teespring, Chubb, Aetna, Delta Dental, and more.
        </p>
      </div>
      <div className="mb6">
        <h3 className="f6 mt2 pt1 light-gray fw4 mb2 monospace">
          &#11096;&nbsp;&nbsp;&nbsp;Skills
        </h3>
        <p className="white ma0">
          User Interface and Experience Design, Visual Design, Interaction
          Design, Digital Product Design, Design Systems, Web and App Design,
          User&nbsp;Testing, Front-end Development, Strong knowledge of
          HTML&nbsp;/&nbsp;CSS&nbsp;/&nbsp;JS
        </p>
      </div>
      <div className="mb5">
        <p className="white ma0 di">
          &#8618;&nbsp;&nbsp;
          <a
            href="mailto:hello@jefflupinski.com"
            className="white trans-link in-link"
          >
            hello@jefflupinski.com
          </a>
        </p>
      </div>
    </div>
    <footer>
      <nav className="pt6 pb5 mh4 mh5-l flex-ns justify-between items-center monospace f7 lh-header white-40">
        <div className="self-start dn-ns">
          <a href="mailto:hello@jefflupinski.com" className="white-40 dim-link">
            hello@jefflupinski.com
          </a>
        </div>
        <ul className="dn-ns">
          <li>
            <a
              href="https://dribbble.com/jefflupinski"
              className="white-40 dim-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lupinskij"
              className="white-40 dim-link"
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
              className="white-40 dim-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jefflupinski"
              className="white-40 dim-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
        <div className="self-start">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </nav>
    </footer>
  </section>
)

export default Footer
