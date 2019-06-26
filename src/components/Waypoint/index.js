import React from 'react'
import PropTypes from 'prop-types'
import { Waypoint as WP } from 'react-waypoint'
import { useScrollPercentage } from 'hooks'

function Waypoint({ children, onEnter, onLeave }) {
  const [scrollPercent, setScrollPercent] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const [scrollRef, scrollPercentage] = useScrollPercentage()

  function checkVisible({ currentPosition, ...rest }) {
    console.log({ currentPosition, rest })
    setIsVisible(currentPosition === 'inside')
  }

  return (
    <div ref={scrollRef}>
      <WP onEnter={onEnter} onLeave={onLeave} onPositionChange={checkVisible}>
        {children}
      </WP>
    </div>
  )
}

Waypoint.propTypes = {
  children: PropTypes.any,
}

Waypoint.defaultProps = {
  children: null,
}

export default Waypoint
