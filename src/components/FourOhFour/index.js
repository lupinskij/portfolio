import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Image } from 'components'

import giphy from './images/giphy.gif'
import screen from './images/screen.png'

const StyledWrap = styled.div`
  font-size: 0;
`

const StyledTitle = styled.h1`
  color: white;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`

const StyledImage = styled(props => <Image {...props} />)`
  height: 100%;
  width: 100%;
`

const StyledScreen = styled.div`
  background-image: url(${screen});
  background-repeat: repeat;
  background-position: left top;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`

const FourOhFour = props => (
  <div className="h-100 min-vh-100 pt6 pb5 relative">
    <div className="wrap-single">
      <div className="relative overflow-hidden">
        <StyledTitle className="sans-serif">
          Page not found &nbsp; :(
        </StyledTitle>
        <StyledWrap>
          <StyledScreen />
          <StyledImage image={giphy} alt="404: Not Found" {...props} />
        </StyledWrap>
      </div>
      <div className="tc pt5">
        <Link
          to="/"
          className="f6 fw6 link dim ba br1 ph4 pv3 dib nowrap center black"
        >
          Back to Home
        </Link>
      </div>
    </div>
  </div>
)

export default FourOhFour
