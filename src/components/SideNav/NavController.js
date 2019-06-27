import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SideNav from './'

const NavWrapper = styled.div`
  position: relative;
`

// Edit your links here
const links = [
  { name: 'Under Armour', id: 'under-armour' },
  { name: 'AMC', id: 'amc' },
  { name: 'Delta Dental', id: 'delta' },
]

function NavController({ children }) {
  const CHILDREN_LENGTH = React.Children.count(children)

  const [visibilityArray, setVisibilityArray] = React.useState(
    Array(CHILDREN_LENGTH).fill(0)
  )

  function handleVisibility(percentage, index) {
    let newArray = [...visibilityArray]
    newArray[index] = percentage
    setVisibilityArray(newArray)
  }

  // Check to make sure that there is the same number of children that there are links
  if (links.length !== CHILDREN_LENGTH) {
    console.error(
      'The number of links in the SideNav is not equal to the number of child components.'
    )
    console.error('See the <NavConroller /> for further details.')
    return null
  }

  return (
    <NavWrapper>
      <SideNav links={links} visibilityArray={visibilityArray} />
      {React.Children.map(children, (el, i) =>
        React.cloneElement(el, {
          id: links[i].id,
          updateVisibility: percentage => handleVisibility(percentage, i),
        })
      )}
    </NavWrapper>
  )
}

NavController.propTypes = {
  children: PropTypes.array.isRequired,
}

NavController.defaultProps = {}

export default NavController
