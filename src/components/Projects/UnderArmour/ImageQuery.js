import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

function ImageQuery({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          imageOne: file(relativePath: { eq: "underarmour-screens.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageTwo: file(relativePath: { eq: "underarmour-image.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageThree: file(relativePath: { eq: "underarmour-users.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFour: file(relativePath: { eq: "underarmour-web.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFive: file(relativePath: { eq: "underarmour-wires.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageSix: file(relativePath: { eq: "underarmour-pages.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => children(data)}
    />
  )
}

ImageQuery.propTypes = {
  children: PropTypes.func.isRequired,
}

ImageQuery.defaultProps = {}

export default ImageQuery
