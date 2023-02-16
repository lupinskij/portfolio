import React from 'react'
import styled from 'styled-components'

import logo1 from './images/logo-1.svg'
import logo2 from './images/logo-2.svg'
import logo3 from './images/logo-3.svg'
import logo4 from './images/logo-4.svg'
import logo5 from './images/logo-5.svg'

import logo6 from './images/logo-6.svg'
import logo7 from './images/logo-7.svg'
import logo8 from './images/logo-8.svg'
import logo9 from './images/logo-9.svg'
import logo10 from './images/logo-10.svg'

import logo11 from './images/logo-11.svg'
import logo12 from './images/logo-12.svg'
import logo13 from './images/logo-13.svg'
import logo14 from './images/logo-14.svg'
import logo15 from './images/logo-15.svg'

import { Image } from 'components'

const StyledImage = styled(props => <Image {...props} />)`
  margin: 0;
  max-width: 100%;
`

const Footer = props => (
  <section id="about" className="footer bg-black">
    <div className="mw-100 mw8-m mw9-l pt6 ph4 ph5-l center">
      <h3 className="f7 monospace p-break fw4 ttu tracked white-50 m0">
        000- About
      </h3>
      <p className="white txt ws-normal normal mb0">
        I am a digital designer living in Colorado. I lead, design, and help
        craft strategic solutions for digital experiences and products.
      </p>
    </div>
    <div className="wrap-pres">
      <div className="mb5 pre-graph">
        <p className="white ma0">
          With over 10 years of experience in the industry, product design has
          been the core of my career for many years. Throughout, I’ve had the
          opportunity to work at agencies, in-house, and independently. I enjoy
          working with teams to create thoughtful and intuitive solutions for
          problems of all sizes.
        </p>
      </div>
      <div className="mb5">
        <p className="white ma0">
          My focus includes User Interface and Experience Design, Visual Design,
          Interaction Design, Product Design, Design Systems, Web and App
          Design, and Front-end Development.
        </p>
      </div>
      <div className="mb6">
        <p className="white ma0">
          I’ve had the chance to work on a wide range of projects for brands in
          almost every vertical. Over the years, I’ve contributed to and led
          teams for clients such as Under Armour, AMC Television, 7-Eleven,
          Salesforce, Aetna, and Epic Games, helping to bring projects from
          concept to fruition.
        </p>
      </div>
    </div>

    <div className="grid mh2 mh4-m mh5-l pt4 pb6-l ph2-ns mb6">
      <div>
        <StyledImage image={logo1} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo2} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo5} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo4} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo3} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo15} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo6} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo9} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo7} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo8} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo11} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo14} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo13} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo10} alt="logo" {...props} />
      </div>
      <div>
        <StyledImage image={logo12} alt="logo" {...props} />
      </div>
    </div>

    <div className="mh4 mh5-l">
      <h2 className="white mb5  normal">
        <span className="white-50">"</span>Hello, world.
        <span className="white-50">^n"</span>
      </h2>
    </div>
    <footer>
      <nav className="bt b--white-30 pv5 mh4 mh5-l flex-ns justify-between items-center white monospace f7 lh-copy ttu tracked">
        <div className="self-start">
          <span>&#8627;&nbsp;</span>
          <a
            href="mailto:hello@jefflupinski.com"
            className="white trans-link"
            data-color="light"
          >
            hello@jefflupinski.com
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/jefflupinski"
              className="white trans-link"
              target="_blank"
              data-color="light"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/jefflupinski"
              className="white trans-link"
              target="_blank"
              data-color="light"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://github.com/lupinskij"
              className="white trans-link"
              target="_blank"
              data-color="light"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              className="white trans-link"
              target="_blank"
              data-color="light"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
        <div className="self-start tr dn-ns">
          <div>(c) {new Date().getFullYear()}</div>
          <div>All Rights Reserved</div>
        </div>
      </nav>
    </footer>
  </section>
)

export default Footer
