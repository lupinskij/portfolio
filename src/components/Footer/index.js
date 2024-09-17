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
  <footer id="about" className="footer bg-black">
    <div className="footer-intro mw-100 mw8-m center">
      <h3 className="mt5 f7 monospace p-break ttu white-70 m0 pa2">
        [000] Introduction
      </h3>
      <p className="white txt fw3 ws-normal normal mb0 mb4-ns pa2">
        I am a digital designer living in Colorado. I lead, design, and help
        craft strategic solutions for digital products and experiences.
      </p>
    </div>

    <section className="footer-intro mw9 center ph3-ns f5 f4-ns lh-copy lh-title-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-25-ns pa2">
          <h3 className="f7 monospace lh-double ttu white-70">Information</h3>
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <p className="white ma0">
            Jeff Lupinski
            <br />
            Interactive Designer
          </p>
          <p className="white ma0">
            <a
              href="mailto:hello@jefflupinski.com?subject=Saying%20hey%20%F0%9F%91%8B%20"
              className="white ma trans-link"
              data-color="light"
            >
              hello@jefflupinski.com
            </a>
          </p>
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <p className="white ma0">
            39.7392° N, 104.9903° W
            <br />
            Denver, Colorado
          </p>
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <p className="white ma0">
            <a
              href="/jeff-lupinski-resume.pdf"
              className="white ma trans-link"
              target="_blank"
              data-color="light"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </p>
        </div>
      </div>
    </section>

    <section className="footer-intro mw9 mb6-ns center ph3-ns f5 f4-ns lh-copy lh-title-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-25-ns pa2">
          <h3 className="f7 monospace lh-double ttu white-70">Profile</h3>
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <p className="white mb1 ma0-ns">
            With over a decade of experience in the industry, product design has
            been the core of my career for many years. Throughout, I’ve had the
            opportunity to work at agencies, in-house, and independently. I
            enjoy working with teams to create solutions for problems of all
            sizes.
          </p>
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <p className="white mb1 ma0-ns">
            My focus includes User Interface and Experience Design, Visual
            Design, Interaction Design, Product Design, Design Systems, Web and
            App Design, and Front-end Development.
          </p>
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <p className="des white mb1 ma0-ns">
            I’ve had the chance to work on a wide range of projects for brands
            in almost every vertical. Contributed and led teams, helping to
            bring projects from concept to fruition.
          </p>
        </div>
      </div>
    </section>

    <section className="grid ph2 ph4-m ph5-l mw9-l center pt4 pb6-l ph2-ns mb6 o-50">
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
    </section>

    <div className="mh4 mh5-l">
      <h2 className="f2 white mb5 dn db-ns normal">
        <span className="white-50">"</span>Hello, world.
        <span className="white-50">^n"</span>
      </h2>
    </div>
    <footer>
      <nav className="bt b--white-30 pv5 mh4 mh5-l flex-ns justify-between items-center white monospace f7 lh-double ttu tracked">
        <div className="self-start mb3 mb0-ns">
          <div>Jeff Lupinski [C/{new Date().getFullYear()}]</div>
        </div>
        <ul>
          <li className="mb3 mb0-ns">
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
          <li className="mb3 mb0-ns">
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
          <li className="mb3 mb0-ns">
            <a
              href="mailto:hello@jefflupinski.com?subject=Saying%20hey%20%F0%9F%91%8B%20"
              className="white trans-link"
              data-color="light"
            >
              E-Mail
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
          <li className="mb3 mb0-ns">
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
        </ul>
        <div className="self-start tr-ns">
          <i className="mr2 inline-flex relative">
            <svg
              width="12"
              height="12"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.98562 2.74371L6.40862 3.32071L5.37342 2.2855L4.87279 1.68305L4.83885 1.70002L4.90673 2.85402L4.90673 8.55613L4.09214 8.55613L4.09214 2.85402L4.16002 1.70002L4.12608 1.68305L3.62545 2.2855L2.59025 3.32071L2.01325 2.74371L4.49944 0.257522L6.98562 2.74371Z"
                fill="#ffffff"
              />
            </svg>
          </i>
          <Link to="/" className="white trans-link" data-color="light">
            Back to top
          </Link>
        </div>
      </nav>
    </footer>
  </footer>
)

export default Footer
