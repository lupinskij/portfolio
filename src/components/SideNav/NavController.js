import React from 'react'
import PropTypes from 'prop-types'

function NavController({ children }) {
  const [visibleComponent, setVisibleComponent] = React.useState(null)

  function handleVisible(pos, index) {
    console.log({ visibleComponent })
    console.log('handle visible: ', { pos, index })
  }

  return React.Children.map(children, (el, i) =>
    React.cloneElement(el, { handleVisible: stuff => handleVisible(stuff, i) })
  )
}

NavController.propTypes = {
  children: PropTypes.array.isRequired,
}

NavController.defaultProps = {}

export default NavController
