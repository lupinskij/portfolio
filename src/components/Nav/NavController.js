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
  { name: 'AMC Premiere', id: 'amc' },
  { name: '7-Eleven', id: 'SevenEleven' },
  { name: 'Under Armour', id: 'under-armour' },
  { name: 'Peddle', id: 'peddle' },
]

function NavController({ children }) {
  const CHILDREN_LENGTH = React.Children.count(children)
  // Nav is ready when the first child's top position has
  // scrolled to or past the top of the viewport  and the
  // last child's bottom position has passed the bottom
  // of the viewport.
  const navReady = useNavReady(links[0].id, links[links.length - 1].id)

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
      <Nav isReady={navReady} links={links} visibilityArray={visibilityArray} />
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
