import React from 'react'
import styled from 'styled-components'

const StyledBreak = styled.div`
  display: block;
  transform: translateX(8.33333333vw);
`

const Footer = () => (
  <section className="bg-black begin-pres">
    <div className="flex flex-wrap pt6 pb4 pt7-l pb6-l ph4 ph5-l">
      <div className="w-50-l mb5 pl3-l">
        <h2 className="white txt-f lh-solid">
          Hello <StyledBreak>World.</StyledBreak>
        </h2>
      </div>
      <div className="w-50-l">
        <div className="flex-ns flex-row mb5">
          <h3 className="w-25-ns white lh-copy fw4 mb3 monospace">About</h3>
          <p className="w-75-ns light-gray f4 lh-copy ma0">
            Multidisciplinary Designer & Front-end Developer based in Boulder,
            Colorado. Focused on designing digital products with modern
            interfaces, and friendly and intuitive&nbsp;experiences.
          </p>
        </div>
        <div className="flex-ns flex-row mb5">
          <h3 className="w-25-ns white lh-copy fw4 mb3 monospace">Work</h3>
          <p className="w-75-ns light-gray f4 lh-copy ma0">
            Contributed to create products for clients such as
            CVS&nbsp;Pharmacy, AMC, Under&nbsp;Armour, AT&amp;T, Teespring,
            Aetna, United&nbsp;Way, and Delta&nbsp;Dental.
          </p>
        </div>
        <div className="flex-ns flex-row mb5">
          <h3 className="w-25-ns white lh-copy fw4 mb3 monospace">Skills</h3>
          <p className="w-75-ns light-gray f4 lh-copy ma0">
            Visual Design, Experience Design, Interaction Design, Product
            Design, Front-end Development, Strong knowledge of
            HTML&nbsp;/&nbsp;CSS&nbsp;/&nbsp;JS, Creative&nbsp;Direction,
            UX&nbsp;Strategy, Prototyping, UX&nbsp;/&nbsp;UI&nbsp;Design,
            User&nbsp;Testing
          </p>
        </div>
        <div className="flex-ns flex-row">
          <h3 className="w-25-ns white lh-copy fw4 mb3 monospace">Contact</h3>
          <a
            href="mailto:iam@jefflupinski.com"
            className="w-75-m light-gray f4 lh-copy ma0 di"
          >
            iam@jefflupinski.com
          </a>
        </div>
      </div>
    </div>
    <footer>
      <nav className="pt6 pb5 ph4 ph5-l flex justify-between items-center monospace f7 lh-nav white-40">
        <div className="self-start">
          <a href="mailto:iam@jefflupinski.com" className="white-40">
            iam@jefflupinski.com
          </a>
        </div>
        <ul className="dn-ns">
          <li>
            <a
              href="https://dribbble.com/jefflupinski"
              className="white-40"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lupinskij"
              className="white-40"
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
              className="white-40"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jefflupinski"
              className="white-40"
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
