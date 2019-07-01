import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavLink from './NavLink'

const SideNavContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
`

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
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: ${({ isReady }) => (isReady ? 1 : 0)};
  position: sticky;
  pointer-events: ${({ isReady }) => (isReady ? 'initial' : 'none')};
  transform: translateX(${({ isReady }) => (isReady ? 0 : -80)}px);
  transition: opacity 500ms ease-out, transform 300ms ease-out;
  top: 0;
  width: 80px;
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
    <SideNavContainer>
      <StyledSideNav isReady={isReady}>
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
    </SideNavContainer>
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
