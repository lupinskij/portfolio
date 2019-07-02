import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavLink from './NavLink'

const NavContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
`

const LinkItem = styled.li`
  bottom: -2px;
  color: #868e96;
  cursor: pointer;
  margin-left: 4em;
  padding-bottom: 4px;
  position: relative;
  transition: color 250ms cubic-bezier(0.44, 0.13, 0.48, 0.87);
  user-select: none;
  white-space: nowrap;

  &:last-child {
    margin-left: 0;
  }

  &:hover {
    color: #343a40;

    span {
      background-color: #343a40;
    }
  }
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: ${({ isReady }) => (isReady ? 1 : 0)};
  pointer-events: ${({ isReady }) => (isReady ? 'initial' : 'none')};
  position: sticky;
  top: 0;
  transform: translateY(${({ isReady }) => (isReady ? 0 : -30)}px);
  transition: opacity 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 60px;
  z-index: 100;
`

const LinkRow = styled.ul`
  display: inline-flex;
  flex-direction: row-reverse;
  list-style: none;
  transform: rotate(-90deg);
`

function Nav({ isReady, links, visibilityArray }) {
  return (
    <NavContainer>
      <StyledNav isReady={isReady}>
        <LinkRow>
          {links.map((link, i) => (
            <LinkItem key={link.id} className="monospace f7">
              <NavLink id={link.id} lineWidth={visibilityArray[i]}>
                {link.name}
              </NavLink>
            </LinkItem>
          ))}
        </LinkRow>
      </StyledNav>
    </NavContainer>
  )
}

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  visibilityArray: PropTypes.arrayOf(PropTypes.number),
}

Nav.defaultProps = {}

export default Nav
