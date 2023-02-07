import { Link } from 'gatsby'
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
  <section className="bg-light-gray">
    <p className="txt ws-normal mw-100 mw8-m mw9-l pt7 ph4 ph5-l center mb0">
      I am a digital designer living in Colorado. I lead, design, and help build
      strategic solutions for products and digital experiences.
    </p>
    <div className="wrap-pres">
      <div className="mb5">
        <p className="black ma0">
          With over 10 years of experience in the industry, product design has
          been the core of my career for many years. Throughout I've had the
          opportunity to work at agencies, in-house, and independently. I enjoy
          working with teams to create thoughtful and intuitive solutions for
          problems of all sizes.
        </p>
      </div>
      <div className="mb5">
        <p className="black ma0">
          My focus includes user Interface and Experience Design, Visual Design,
          Interaction Design, Digital Product Design, Design Systems, Web and
          App Design, and Front-end Development.
        </p>
      </div>
      <div className="mb6">
        <p className="black ma0">
          I’ve had the chance to work on a wide range of projects for brands in
          almost every vertical. Over the years I’ve contributed and lead
          projects for Under&nbsp;Armour, AMC&nbsp;Television, Salesforce,
          7-Eleven, Epic&nbsp;Games, and more.
        </p>
      </div>
    </div>

    <div className="cf pv4 ph2-ns">
      <div className="fl w-20 pa4">
        <StyledImage image={logo1} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo2} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo5} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo4} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo3} alt="logo" {...props} />
      </div>
    </div>
    <div className="cf pv4 ph2-ns">
      <div className="fl w-20 pa4">
        <StyledImage image={logo15} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo6} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo9} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo7} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo8} alt="logo" {...props} />
      </div>
    </div>
    <div className="cf pv4 ph2-ns mb7">
      <div className="fl w-20 pa4">
        <StyledImage image={logo11} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo14} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo13} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo10} alt="logo" {...props} />
      </div>
      <div className="fl w-20 pa4">
        <StyledImage image={logo12} alt="logo" {...props} />
      </div>
    </div>

    <div className="mh5-l">
      <h2 className="black mb5 f-subheadline">Let's connect</h2>
    </div>
    <footer>
      <nav className="pv5 mh4 mh5-l flex-ns justify-between items-center monospace f7 lh-copy black bt bw1">
        <div className="self-start dn-ns">
          <a href="mailto:hello@jefflupinski.com" className="black trans-link">
            hello@jefflupinski.com
          </a>
        </div>
        <ul className="dn-ns">
          <li>
            <a
              href="https://dribbble.com/jefflupinski"
              className="black trans-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lupinskij"
              className="black trans-link"
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
              className="black trans-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jefflupinski"
              className="black trans-link"
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
