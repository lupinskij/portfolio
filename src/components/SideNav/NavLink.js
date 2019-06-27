import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const StyledNavLink = styled.div`
  color: black;
  position: relative;
`

const Line = styled(({ lineWidth, ...props }) => <animated.span {...props} />)`
  background-color: black;
  bottom: -3px;
  display: block;
  height: 1px;
  position: absolute;
  transform-origin: ${({ lineWidth }) => (lineWidth > 0 ? 'right' : 'left')};
  width: 100%;
  will-change: transform;
`

function NavLink({ children, id, lineWidth, next }) {
  const props = useSpring({
    transform: `matrix(${lineWidth / 100}, 0, 0, 1, 0, 0)`,
  })

  function handleClick() {
    let to = document.getElementById(id)
    if (to) {
      to = to.offsetTop + window.innerHeight
    }
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: to,
    })
  }

  return (
    <StyledNavLink onClick={handleClick}>
      {children}
      <Line lineWidth={lineWidth} style={props} />
    </StyledNavLink>
  )
}

NavLink.propTypes = {
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  lineWidth: PropTypes.number,
}

NavLink.defaultProps = {
  lineWidth: 0,
}

export default NavLink
