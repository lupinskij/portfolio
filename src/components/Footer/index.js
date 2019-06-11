import React from 'react'
import styled from 'styled-components'
import src from './images/scribbs.svg'
import { Image } from 'components'

const StyledImage = styled(props => <Image {...props} />)`
  left: 32%;
  max-width: 45%;
  bottom: 0;

  @media screen and (max-width: 30em) {
    left: 0;
    max-width: 60%;
  }
`

const Footer = props => (
  <section className="bg-black begin-pres">
    <div className="flex flex-wrap pt6 pb4 pt7-l pb6-l ph4 ph5-l">
      <div className="w-50-l mb5">
        <h2 className="light-gray txt-f lh-solid">
          <div className="dark-gray relative">
            Hello World.
            <StyledImage className="absolute" image={src} alt="" {...props} />
          </div>
          Nice to meet you.
          <br />
          Let’s begin.
        </h2>
      </div>
      <div className="w-50-l">
        <div className="flex-ns flex-row mb5">
          <h3 className="f6 mt2 pt1 w-25-ns light-gray fw4 mb3 monospace">
            01&nbsp;&nbsp;&nbsp;About
          </h3>
          <p className="w-75-ns white f4 lh-copy ma0">
            Designer & Front-end Developer based in Boulder, Colorado. Focused
            on designing digital products with modern interfaces, and friendly
            and intuitive&nbsp;experiences.
          </p>
        </div>
        <div className="flex-ns flex-row mb5">
          <h3 className="f6 mt2 pt1 w-25-ns light-gray fw4 mb3 monospace">
            02&nbsp;&nbsp;&nbsp;Work
          </h3>
          <p className="w-75-ns white f4 lh-copy ma0">
            Contributed to create products for clients such as
            Under&nbsp;Armour, AMC, CVS&nbsp;Pharmacy, United&nbsp;Way,
            AT&amp;T, Teespring, Aetna, and Delta&nbsp;Dental.
          </p>
        </div>
        <div className="flex-ns flex-row mb5">
          <h3 className="f6 mt2 pt1 w-25-ns light-gray fw4 mb3 monospace">
            03&nbsp;&nbsp;&nbsp;Skills
          </h3>
          <p className="w-75-ns white f4 lh-copy ma0">
            Visual Design, Experience Design, Interaction Design, Product
            Design, Front-end Development, Strong knowledge of
            HTML&nbsp;/&nbsp;CSS&nbsp;/&nbsp;JS, User&nbsp;Testing, Prototyping,
            UX&nbsp;Strategy
          </p>
        </div>
        <div className="flex-ns flex-row">
          <h3 className="f6 mt2 pt1 w-25-ns light-gray fw4 mb3 monospace">
            04&nbsp;&nbsp;&nbsp;Contact
          </h3>
          <a
            href="mailto:iam@jefflupinski.com"
            className="w-75-m white f4 lh-copy ma0 di"
          >
            iam@jefflupinski.com
          </a>
        </div>
      </div>
    </div>
    <footer>
      <nav className="pt6 pb5 mh4 mh5-l flex-ns justify-between items-center monospace f7 lh-nav white-40">
        <div className="self-start dn-ns">
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
