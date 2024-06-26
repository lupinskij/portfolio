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
    <div className="footer-intro mw-100 mw8-m mw9-l center">
      <h3 className="mt5 f6 monospace p-break fw4 ttu tracked white-50 m0">
        000_Introduction
      </h3>
      <p className="white txt ws-normal normal mb0">
        I am a digital designer living in Colorado. I lead, design, and help
        craft strategic solutions for digital products and experiences.
      </p>
    </div>
    <div className="wrap-pres">
      <div className="mb6 pre-graph">
        <p className="white">
          With over 10 years of experience in the industry, product design has
          been the core of my career for many years. Throughout, I’ve had the
          opportunity to work at agencies, in-house, and independently. I enjoy
          working with teams to create thoughtful and intuitive solutions for
          problems of all sizes.
        </p>
        <p className="white">
          My focus includes User Interface and Experience Design, Visual Design,
          Interaction Design, Product Design, Design Systems, Web and App
          Design, and Front-end Development.
        </p>
        <p className="white">
          I’ve had the chance to work on a wide range of projects for brands in
          almost every vertical. Over the years, I’ve contributed to and led
          teams for clients such as Google, Under Armour, Aetna, Taco Bell, and
          Epic Games, helping to bring projects from concept to fruition.
        </p>
      </div>
    </div>

    <div className="grid mh2 mh4-m mh5-l pt4 pb6-l ph2-ns mb6">
      <div>
        <StyledImage image={logo1} alt="Meta" {...props} />
      </div>
      <div>
        <StyledImage image={logo2} alt="Salesforce" {...props} />
      </div>
      <div>
        <StyledImage image={logo5} alt="Marriott Bonvoy" {...props} />
      </div>
      <div>
        <StyledImage image={logo7} alt="Taco Bell" {...props} />
      </div>
      <div>
        <StyledImage image={logo3} alt="Specialized" {...props} />
      </div>

      <div>
        <StyledImage image={logo15} alt="CVS" {...props} />
      </div>
      <div>
        <StyledImage image={logo6} alt="AMC" {...props} />
      </div>
      <div>
        <StyledImage image={logo11} alt="Google" {...props} />
      </div>
      <div>
        <StyledImage image={logo8} alt="AT&T" {...props} />
      </div>
      <div>
        <StyledImage image={logo14} alt="Zwift" {...props} />
      </div>

      <div>
        <StyledImage image={logo13} alt="Epic Games" {...props} />
      </div>
      <div>
        <StyledImage image={logo9} alt="7-Eleven" {...props} />
      </div>
      <div>
        <StyledImage image={logo4} alt="Under Armour" {...props} />
      </div>
      <div>
        <StyledImage image={logo12} alt="Chubb" {...props} />
      </div>
      <div>
        <StyledImage image={logo10} alt="Aetna" {...props} />
      </div>
    </div>

    <div className="mh4 mh5-l">
      <h2 className="f2 white mb5 normal">
        <span className="white-50">"</span>Hello, world.
        <span className="white-50">^n"</span>
      </h2>
    </div>
    <footer>
      <nav className="bt b--white-30 pv5 mh4 mh5-l flex-ns justify-between items-center white monospace f6 lh-copy ttu tracked">
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
            <i className="inline-flex relative i-arrow">
              <svg
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </i>
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
            <i className="inline-flex relative i-arrow">
              <svg
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </i>
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
            <i className="inline-flex relative i-arrow">
              <svg
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </i>
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
            <i className="inline-flex relative i-arrow">
              <svg
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.49194 3.516H5.67594L5.67594 2.052L5.74794 1.272L5.71194 1.26L4.94394 2.124L0.911938 6.156L0.335937 5.58L4.36794 1.548L5.23194 0.78L5.21994 0.743999L4.43994 0.816L2.97594 0.816V0L6.49194 0L6.49194 3.516Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </i>
          </li>
        </ul>
        <div className="self-start tr dn-ns o-50">
          <div>(c) {new Date().getFullYear()}</div>
          <div>All_Rights_Reserved</div>
        </div>
      </nav>
    </footer>
  </section>
)

export default Footer
