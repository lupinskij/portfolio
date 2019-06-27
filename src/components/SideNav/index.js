import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavLink from './NavLink'

const LinkItem = styled.li`
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  margin-right: 50px;
  font-weight: 500;
  letter-spacing: 1.5px;
  color: black;
  font-size: 18px;
  text-transform: uppercase;
  user-select: none;
  transition: color 0.25s linear;
`

const StyledSideNav = styled.nav`
  opacity: 1;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  z-index: 100;
`

const LinkRow = styled.ul`
  display: inline-flex;
  flex-direction: row-reverse;
  list-style: none;
  opacity: 0.7;
  transform: rotate(-90deg);
`

function SideNav({ isReady, links, visibilityArray }) {
  return (
    <StyledSideNav className="SideNav">
      <LinkRow>
        {links.map((link, i) => (
          <LinkItem key={link.id}>
            <NavLink id={link.id} lineWidth={visibilityArray[i]}>
              {link.name}
            </NavLink>
          </LinkItem>
        ))}
      </LinkRow>
    </StyledSideNav>
  )
}

SideNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  visibilityArray: PropTypes.arrayOf(PropTypes.number),
}

SideNav.defaultProps = {}

export default SideNav
