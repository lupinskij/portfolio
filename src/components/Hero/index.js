import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Split } from '@squib/react-split'

const StyledHero = styled.div`
  // ns
  @media screen and (min-width: 30em) {
    height: 100vh;
  }
`

function Hero({ title }) {
  return (
    <StyledHero className="Hero vh-100 vw-100 bg-near-white ph5 pv6 relative flex items-end">
      <div className="mw9">
        <Split string={title} separator={/\s+/}>
          {substrings =>
            substrings.map(({ substring, key }) => (
              <span className="wrd">
                <span key={key} className="txt">
                  {substring}{' '}
                </span>
              </span>
            ))
          }
        </Split>
      </div>
    </StyledHero>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
}

export default Hero
