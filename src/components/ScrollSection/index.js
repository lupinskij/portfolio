import React from 'react'
import PropTypes from 'prop-types'
import { useScrollPercentage } from 'hooks'

function ScrollSection({ children, id, updateVisibility }) {
  const [scrollRef, scrollPercentage] = useScrollPercentage()

  // Update the parent each time the scroll percentage updates
  React.useEffect(() => {
    if (!updateVisibility) {
      return console.log(
        'ScrollSection id: ',
        id,
        ' did not receive an updateVisibility prop'
      )
    }
    updateVisibility(scrollPercentage)
    // eslint-disable-next-line
  }, [scrollPercentage])

  return (
    <div className="ScrollWrapper" id={id} ref={scrollRef}>
      {children}
    </div>
  )
}

ScrollSection.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  updateVisibility: PropTypes.func,
}

ScrollSection.defaultProps = {
  children: null,
  id: '',
}

export default ScrollSection
