import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Split } from '@squib/react-split'

const StyledHero = styled.div`
  // ns
  @media screen and (min-width: 30em) {
    height: 100vh;
    margin-bottom: 4vw;
  }
`

function Hero({ title }) {
  return (
    <StyledHero className="Hero vh-100 vw-100 bg-near-white ph4 ph5-l pv5 pv6-ns relative flex items-center items-end-l">
      <div className="mw-100 mw8-m mw9-l">
        <Split string={title} separator={/\s+/}>
          {substrings =>
            substrings.map(({ substring, key }) => (
              <span key={key} className="wrd">
                <span className="txt">{substring} </span>
              </span>
            ))
          }
        </Split>
      </div>
      <div className="progress" />
    </StyledHero>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
}

export default Hero
