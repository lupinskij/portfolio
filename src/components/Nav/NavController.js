import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Nav from './'
import useNavReady from './useNavReady'

const NavWrapper = styled.div`
  position: relative;
`

// Edit your links here
const links = [
  { name: 'Under Armour', id: 'under-armour' },
  { name: 'AMC Premiere', id: 'amc' },
  { name: 'Delta Dental', id: 'delta' },
]

function NavController({ children }) {
  const CHILDREN_LENGTH = React.Children.count(children)
  // Basically Nav is "ready" when the first child is scrolled to the top of the screen
  const NavReady = useNavReady(links[0].id)

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
      'The number of links in the Nav is not equal to the number of child components.'
    )
    console.error('See the <NavConroller /> for further details.')
    return null
  }

  return (
    <NavWrapper>
      <Nav isReady={NavReady} links={links} visibilityArray={visibilityArray} />
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
